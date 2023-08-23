//let input = "hello world";
let input = "hello";

function first_rule(str) {
    let end = 'ay';
    let words = [];
    let out = "";
    words = str.split(' ');
    for(let i = 0; i < words.length; i++){
        word = words[i];
        flett = word.substring(0, 1);
        nword = word.substring(1) + flett + end;
        out += nword + ' ';
    }
    return out;
}
console.log(input);
console.log(first_rule(input));
