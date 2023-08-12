const converter = require('number-to-words');

let str = '';
let sum = 0;

for(let i = 1; i <= 1000; i++){
    //tmp = converter.toWords(i);
    //str = tmp.replace(/[ -]/g, '');
    str = (converter.toWords(i)).replace(/[ -]/g, '');
    sum += str.length;
    console.log(str);
}
console.log(`sum ${sum}`);
console.log(`sum + ands ${sum+2430+270}`);