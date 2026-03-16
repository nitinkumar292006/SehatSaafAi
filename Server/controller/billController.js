import fs from "fs";

import { extractText } from "../services/ocrService.js";
import { extractBillItems } from "../services/aiExtractor.js";
import { classifyItem } from "../services/classifyItem.js";

import generateBillSummary from "../services/generateBillSummary.js";
import detectDuplicates from "../services/detectDuplicates.js";
import calculateTransparency from "../services/calculateTransparency.js";

import checkPrices from "../services/checkPrices.js";
import detectSuspiciousCharges from "../services/detectSuspiciousCharges.js";
import generateExplanation from "../services/generateExplanation.js";

export const analyzeBill = async (req, res) => {

  try {

    const filePath = req.file.path;
    const mimetype = req.file.mimetype;

    // OCR
    const ocrText = await extractText(filePath, mimetype);

    console.log("OCR TEXT:\n", ocrText);

    // AI extraction
    const result = await extractBillItems(ocrText);

    console.log("AI RESULT:\n", result);

    // categorize items
    let categorizedItems = (result.items || []).map(item => {
      return {
        name: item.name,
        amount: item.amount || 0,
        category: classifyItem(item.name)
      };
    });

    // price comparison
    categorizedItems = checkPrices(categorizedItems);

    // bill summary
    const summary = generateBillSummary(categorizedItems);

    // always trust AI total
    summary.totalBill = result.total;

    // duplicate charges
    const duplicates = detectDuplicates(categorizedItems);

    // suspicious charges
    const suspicious = detectSuspiciousCharges(categorizedItems);

    // transparency score
    const transparency = calculateTransparency(categorizedItems, duplicates);

    // AI explanation
    const explanation = generateExplanation(summary, transparency, duplicates, suspicious);

    // delete uploaded file
    fs.unlinkSync(filePath);

    res.json({
      success: true,
      summary,
      transparency,
      duplicates,
      suspicious,
      explanation,
      items: categorizedItems
    });

  } catch (error) {

    console.error("Bill analysis error:", error);

    res.status(500).json({
      success: false,
      message: "Bill analysis failed"
    });

  }

};