import fs from "fs";
import { matchMedicine } from "./medicineMatcher.js";

const medicinePrices = JSON.parse(
 fs.readFileSync(new URL("../data/medicinePrices.json", import.meta.url))
);

export default function checkPrices(items){

  return items.map(item=>{

    const matchedMedicine = matchMedicine(item.name);

    if(item.category !== "Medicine"){
      return{
        ...item,
        marketPrice:null,
        overpriced:false
      };
    }

    const marketPrice = medicinePrices[matchedMedicine];

    const difference = item.amount - marketPrice;

    return{
      ...item,
      matchedMedicine,
      marketPrice,
      difference,
      overpriced: difference > 0
    };

  });

}