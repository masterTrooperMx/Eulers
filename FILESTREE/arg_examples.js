const arg = process.argv; // FILESTREE tests
console.table(arg);
console.log(typeof arg);
console.log(arg.length);

const arg1 = process.argv.slice(2);
console.table(arg1);
console.log(typeof arg1);
console.log(arg1.length);