function getLastNames(firstName, people) {
  return new Promise((resolve, reject) => {
      
      const reducer_func = (accumulator, currentValue) => {

          if(currentValue.firstName == firstName){

              accumulator.push(currentValue.lastName);
          }

          return accumulator;
      };
      
      const lastnames = people.reduce(reducer_func, []);

      if (lastnames.length == 0){

          reject('Invalid');

      } else {
          
          lastnames.sort();
          resolve(lastnames);
      }
  });
}

firstName = 'David'
people = [
        {
            firstName: 'David',
            lastName: 'Dobrick'
        },
        {
            firstName: 'David',
            lastName: 'Beckham'
        },
        {
            firstName: 'Chris',
            lastName: 'Lee'
        },
        {
            firstName: 'James',
            lastName: 'Bond'
        },
    ]


getLastNames(firstName, people);
