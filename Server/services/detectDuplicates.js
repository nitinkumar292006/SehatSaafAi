export default function detectDuplicates(items){

  const map = {};
  const duplicates = [];

  items.forEach(item=>{

    const key = item.name
      .toLowerCase()
      .replace(/dr|doctor|\(.*?\)/g,"")
      .trim();

    if(!map[key]){
      map[key] = 1;
    }else{
      map[key]++;
    }

  });

  Object.keys(map).forEach(key=>{

    if(map[key] > 1){

      duplicates.push({
        service:key,
        count:map[key]
      });

    }

  });

  return duplicates;

}