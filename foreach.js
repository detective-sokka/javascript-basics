function convertArray(arr) {
    arr.forEach((element, index, arr) => {
        
        arr[index] = (index + 1) * element;
    });
    return arr;
}