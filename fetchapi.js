// https://pokeapi.co/api/v2/pokemon/ditto

async function getCommentsByUserId(userId) {

    let userData = [];
    const res = await fetch('/api/comments');
    const data = await res.json();

    data.map((user) => {
        if(user.userId === userId) userData.push(user.data) 
    })
    
    return userData;
}
