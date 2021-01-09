let isPrime = (number) =>{
    num_sqrt = Math.sqrt(number);
    for(i = 2; i <= num_sqrt; i++ ){
      if(number % i == 0) return false;
    }
    return number > 1;
}

let modify = (array) => {
    array.forEach((item, i) => {
      if(isPrime(item)) array[i] += 1;
      else array[i] *= 2;
      console.log("element " , i, "is", array[i])
    });

    return array;
}

console.log(modify([1, 2, 3, 4, 5]))
