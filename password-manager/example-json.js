var person = {
	name : 'andrew',
	age: 24
};

var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject);
console.log(typeof personObject);
console.log(personObject.name);

var animal = '{"name":"Halley"}';

var animalObject = JSON.parse(animal);
console.log(animalObject);
console.log(typeof animalObject);

animalObject.age = 2;

var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
console.log(typeof animalJSON);