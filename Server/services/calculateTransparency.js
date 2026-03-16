export default function calculateTransparency(items,duplicates){

  let score = 100;

  let unknownCategoryCount = 0;

  items.forEach(item=>{

    if(item.category === "Other"){
      score -= 2;
      unknownCategoryCount++;
    }

  });

  score -= duplicates.length * 5;

  if(score < 0) score = 0;

  return{
    transparencyScore:score,
    issues:{
      duplicateCharges:duplicates.length,
      unknownCategories:unknownCategoryCount
    }
  };

}