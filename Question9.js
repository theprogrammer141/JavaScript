let items = [250,645,300,900,50];

for(let i = 0; i < items.length; i++)
{
     let offer = items[i] * 0.1;
     items[i] -= offer;
}

console.log(items);