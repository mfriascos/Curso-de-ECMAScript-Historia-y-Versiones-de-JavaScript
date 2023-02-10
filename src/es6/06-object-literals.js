// enhaced object literals 

function newUser(user, age, country,userId) {
    return {
        user,
        age,
        country,
        id:userId
    };
}

console.log(newUser('mfriascos',34,'CO',1));