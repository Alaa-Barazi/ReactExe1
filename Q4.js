//Destructure an object with computed property names:
const propName = 'name';
const person = {
[propName]: 'John',
age: 30
};
const {name,age}=person;
console.log(name,age);