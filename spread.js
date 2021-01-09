function concatenate(a1, a2, a3, a4, a5) { // concats the array CONTENTS

    return [...a1, ...a2, ...a3, ...a4, ...a5]
}

function concatArray (...a1){ // concats the ARRAYS

    return [...a1]
}
console.log(concatenate([1, 2], [2, 3], [1, 2, 3, 5], ['a', 'b', -1], ['g', 'e', 'h']))

console.log(concatRest([1, 2], [2, 3], [1, 2, 3, 5], ['a', 'b', -1], ['g', 'e', 'h']))