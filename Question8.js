let marks = [85,97,98,76,60];
let sum = 0;

for(let i=0; i<marks.length; i++)
{
    sum = sum + marks[i];
}

let average = sum / marks.length;
console.log(`Average marks of the class = ${average}`);