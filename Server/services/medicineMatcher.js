import Fuse from "fuse.js";
import fs from "fs";

const medicinePrices = JSON.parse(
  fs.readFileSync(new URL("../data/medicinePrices.json", import.meta.url))
);

const medicineList = Object.keys(medicinePrices);

const fuse = new Fuse(medicineList,{
  includeScore:true,
  threshold:0.25
});

export function matchMedicine(name){

  const result = fuse.search(name);

  if(result.length === 0) return null;

  return result[0].item;

}