function findLength(arr) {
    arr = arr.map((str) => {
        if(str == null || str == undefined){

            return 0;
        }
        return str.length;
    })
    return arr;
}

arr = ["", ""]
