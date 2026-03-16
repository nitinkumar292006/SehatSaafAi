export function simpleParser(text){

  const lines = text.split("\n");
  const items = [];

  for(const line of lines){

    const match = line.match(/(.+?)\s+(\d+\.\d{2})$/);

    if(!match) continue;

    const name = match[1].trim();
    const price = parseFloat(match[2]);

    if(price < 20 || price > 50000) continue;

    items.push({
      name,
      hospitalPrice: price
    });

  }

  return items;
}