export function columnParser(text){

  const lines = text.split("\n");
  const items = [];

  for(const line of lines){

    const numbers = line.match(/\d+\.\d+/g);

    if(!numbers) continue;

    const price = parseFloat(numbers[numbers.length-1]);

    if(price < 10 || price > 100000) continue;

    const words = line.split(/\d+/)[0].trim();

    if(words.length < 3) continue;

    items.push({
      name: words,
      hospitalPrice: price
    });

  }

  return items;

}