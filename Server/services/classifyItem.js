export function classifyItem(name){

  const text = name.toLowerCase();

  // Doctor fee
  if(
    text.includes("doctor") ||
    text.includes("consult") ||
    text.includes("visit")
  ){
    return "Doctor Fee";
  }

  // Medicine detection
  if(
    text.includes("tablet") ||
    text.includes("capsule") ||
    text.includes("syrup") ||
    text.includes("injection") ||
    text.includes("medicine") ||
    text.includes("amoxicillin") ||
    text.includes("ibuprofen") ||
    text.includes("azithromycin") ||
    text.includes("paracetamol")
  ){
    return "Medicine";
  }

  // Lab tests
  if(
    text.includes("test") ||
    text.includes("scan") ||
    text.includes("x-ray") ||
    text.includes("cbc") ||
    text.includes("ct")
  ){
    return "Lab Test";
  }

  // Room
  if(
    text.includes("room") ||
    text.includes("bed") ||
    text.includes("icu")
  ){
    return "Room Charges";
  }

  // Food
  if(
    text.includes("food") ||
    text.includes("diet")
  ){
    return "Food";
  }

  return "Other";

}