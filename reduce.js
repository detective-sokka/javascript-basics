function groupByAge(objectArray) {
    const reducer_func = (accumulator, currentValue) => {
        let key = currentValue.age;
        if(!accumulator[key]){

          accumulator[key] = [];
        }
        accumulator[key].push(currentValue);
        return accumulator;
    };

    newObject = objectArray.reduce(reducer_func, {});
    return newObject;
}

obj = [

  { name: 'John', age: 21 },

  { name: 'Mike', age: 20 },

  { name: 'Harvey', age: 20 }

]

console.log(groupByAge(obj))
