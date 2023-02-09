var lastName = 'David';
lastName = 'Oscar';         // Reasignamos un valor a la variable
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi'              // Reasignamos un valor a la variable
console.log(fruit);

const animal = 'Dog';
//animal = 'Cat';             // No permite reasignar 
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';   // function scope
        let fruit2 = 'Kiwi';    // block scope
        const fruit3 = 'Banana' //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();


