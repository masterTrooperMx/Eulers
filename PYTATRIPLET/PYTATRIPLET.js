/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a**2 + b**2 = c**2
 * For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

const max = 1000;
let triplet = [];

for(let i = 1; i <= max; i++){
    for(let j = 1; j <= max; j++){
        for(let k = 1; k <= max; k++){
            if(i + j + k == max){
                if(i < j && j < k) {
                    triplet.push([i,j,k]);
                }
            }
        }
    }
}
console.log(triplet);

for(let i = 0; i < triplet.length; i++){
    let [a, b, c] = triplet[i];
    let mul = Math.pow(a, 2) + Math.pow(b, 2);
    if(mul == Math.pow(c, 2)){
        console.log(triplet[i], mul, a*b*c);
    }
}