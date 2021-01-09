function filterByCity(arr) {

  const new_arr = arr.filter(obj => (obj.city == "Bangalore" || obj.city == "bangalore" || obj.city == "Hyderabad" || obj.city =="hyderabad")) ;
  return new_arr;
}

array = [
  {name: "John", city: "delhi"},
  {name: "Peter", city: "bangalore"},
  {name: "Mike", city: "Bangalore"},
  {name: "Rachel", city: "Hyderabad"}
]

console.log(filterByCity(array))
