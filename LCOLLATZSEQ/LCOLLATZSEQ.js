let chains = [];

const isEven = (n) => {
    return (n%2 == 0)? true : false;
}

const collatz = (n) => {
    if(isEven(n)){
        return Math.round(n/2);
    } else {
        return 3*n + 1;
    }
}

function main() {
    let lchain = 0;
    for(let num = 13; num < 1000000; num++){
        let i = num;
        let sal = '';
        let chain = [];
        while(i > 1) {
            sal += `${i}->`;
            i = collatz(i);
            chain.push(i)
        }
        if(chain.length > lchain){
            lchain = chain.length;
            chains.push([chain, [num, lchain]]);
        }
        console.log(sal + '1');
    }
    console.log(chains);
}

main();