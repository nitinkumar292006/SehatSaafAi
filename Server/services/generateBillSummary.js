export default function generateBillSummary(items){

  const summary = {
    Medicine:0,
    "Lab Test":0,
    "Doctor Fee":0,
    "Room Charges":0,
    Food:0,
    Other:0
  };

  let totalBill = 0;

  items.forEach(item=>{

    const category = item.category || "Other";

    if(summary[category] !== undefined){
      summary[category] += item.amount;
    }

    totalBill += item.amount;

  });

  return{
    totalBill,
    categoryBreakdown:summary
  };

}