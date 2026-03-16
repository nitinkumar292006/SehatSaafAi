import Tesseract from "tesseract.js";
import sharp from "sharp";

export async function extractText(filePath){

  const processed = filePath + "-processed.png";

  await sharp(filePath)
    .resize(2200)
    .grayscale()
    .normalize()
    .sharpen()
    .toFile(processed);

  const { data } = await Tesseract.recognize(processed,"eng");

  return data.text;
}