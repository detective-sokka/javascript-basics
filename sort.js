function sortAccounts(arr) {
    
    arr.sort((a, b)=>{

       return (b['created'] - a['created']) ||  a['accountHolderName'].localeCompare(b['accountHolderName']);
    });
    return arr;
}

input_arr = [
    {
         created: new Date("05/22/1859"),
         accountHolderName: "Arthur"
    },
    {
         created: new Date("03/25/2001"),
         accountHolderName: "Doyle"
    },
    {
         created: new Date("03/25/2001"),
         accountHolderName: "Conan" 
    }
]

console.log(sortAccounts(input_arr))