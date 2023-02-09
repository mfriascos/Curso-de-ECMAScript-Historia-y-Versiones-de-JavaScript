//Antigua Forma
function newUser(name, age, country ) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';

    console.log(name,age,country);
}

newUser();
newUser('David',15,'CO');

//Nueva forma
function newAdmin(name = 'Oscar',age = 32, country = 'CL'){
    var name = name;
    var age = age;
    var country = country;

    console.log(name,age,country);
}

newAdmin();


