export function tableParser(text){

  const lines = text.split("\n");
  const items = [];

  for(let line of lines){

    line = line.trim();

    if(!line) continue;

    // skip totals
    if(/total|balance|amount paid|discount|net amount/i.test(line)){
      continue;
    }

    const numbers = line.match(/\d+(?:\.\d+)?/g);

    if(!numbers) continue;

    const price = parseFloat(numbers[numbers.length - 1]);

    if(price < 20 || price > 100000) continue;

    let name = line.replace(/\d+(?:\.\d+)?/g,"");

    name = name
      .replace(/[|()[\]]/g," ")
      .replace(/\s+/g," ")
      .trim();

    if(name.length < 3) continue;

    items.push({
      name,
      hospitalPrice: Math.round(price)
    });

  }

  return items;

}