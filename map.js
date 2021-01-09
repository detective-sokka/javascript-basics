function findOccurrence(names) {
    var occurence = new Map();
    
    names.forEach((name) => {

      console.log(name, occurence, occurence.has(name))

      if(occurence.has(name)){

        occurence.set(name, occurence.get(name) + 1);

      } else {

        occurence.set(name, 1);
      }
      
    });

    return occurence;
}

list_of_names = ["senku", "taiju", "suika", "senku", "magma", "chrome", "suika", "senku"];
console.log(findOccurrence(list_of_names))
