function minValue(...args){

    let min = Number.MAX_SAFE_INTEGER;
    args.forEach((argument) => {

        if (argument < min) min = argument;
    }); 

    return min;
}

console.log(minValue(1, 2, 3, -4, 100, 1000, 123445))
console.log(minValue(-4, -100, -1000, -123445))