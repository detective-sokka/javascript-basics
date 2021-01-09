function getPokeData(){

	let charizard = "https://pokeapi.co/api/v2/pokemon/charizard";

	axios.get(charizard).then((response) => {

		console.log(response);

	})
	.catch((error) => {

		console.log(error);
	});

	return "done";
}

console.log(getPokeData());