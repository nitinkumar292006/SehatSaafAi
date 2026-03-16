export function cleanOCR(text){

  return text
    .replace(/[₹]/g,"")
    .replace(/[|]/g," ")
    .replace(/,/g,"")
    .replace(/\s+/g," ")
    .trim();

}