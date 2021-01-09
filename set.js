function distinctCount(array) {

    const set_arr = new Set(array);
    console.log(set_arr)
    return set_arr.size;
}

input_arr  = [1, 1, 1, 1]
console.log(distinctCount(input_arr))
