export function repairOCR(text){

  return text

    // remove currency symbol
    .replace(/[₹]/g,"")

    // fix 45000 → 450.00
    .replace(/(\d{3,})00\b/g, "$1.00")

    // fix 5000 → 500.00
    .replace(/\b(\d{3})0\b/g, "$1.00")

    // fix OCR misread letters
    .replace(/S000/g,"5000")

    // common OCR word mistakes
    .replace(/Semvices/g,"Services")
    .replace(/Chaeges/g,"Charges")
    .replace(/Netuh/g,"Nebul")
    .replace(/Nurving/g,"Nursing")

    // remove weird symbols
    .replace(/[|()[\]]/g," ")

    // clean spaces
    .replace(/\s+/g," ")

    .trim();

}