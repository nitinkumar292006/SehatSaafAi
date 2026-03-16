export default function detectSuspiciousCharges(items){

  const suspicious = [];

  items.forEach(item=>{

    if(item.marketPrice && item.amount > item.marketPrice * 1.5){

      suspicious.push({
        name:item.name,
        hospitalPrice:item.amount,
        marketPrice:item.marketPrice,
        issue:"Hospital price significantly higher than market price"
      });

    }

  });

  return suspicious;

}