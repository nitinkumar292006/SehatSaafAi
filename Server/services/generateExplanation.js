export default function generateExplanation(summary, transparency, duplicates, suspicious){

  const messages = [];

  const total = summary.totalBill;
  const breakdown = summary.categoryBreakdown;

  // Room charge analysis
  const roomPercent = Math.round((breakdown["Room Charges"] / total) * 100);

  if(roomPercent > 40){
    messages.push(`Room charges account for about ${roomPercent}% of the total bill, which is a significant portion.`);
  }

  // Medicine analysis
  const medPercent = Math.round((breakdown["Medicine"] / total) * 100);

  if(medPercent > 30){
    messages.push(`Medicines contribute around ${medPercent}% of the bill.`);
  }

  // Duplicate detection
  if(duplicates.length > 0){

    const duplicateServices = duplicates.map(d => d.service).join(", ");

    messages.push(`Duplicate charges detected for: ${duplicateServices}. You may want to verify these services.`);
  }

  // Overpriced medicines
  if(suspicious.length > 0){

    const meds = suspicious.map(m => m.name).slice(0,3).join(", ");

    messages.push(`Some medicines appear significantly higher than typical market prices, such as ${meds}.`);
  }

  // Transparency score
  if(transparency.transparencyScore > 85){
    messages.push("Overall bill transparency appears good based on the detected charges.");
  }
  else if(transparency.transparencyScore > 60){
    messages.push("The bill appears moderately transparent, but a few charges may require verification.");
  }
  else{
    messages.push("The bill transparency appears low and may require careful review.");
  }

  return messages.join(" ");

}