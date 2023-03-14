//Destructure a complex object with default values,
//renaming, and computed property names:
const propName = 'address';
const person = {
firstName: 'John',
lastName: 'Doe',
[propName]: {
street: '123 Main St',
city: 'Anytown'
}
};

const {firstName:fName,lastName:lName,address:{street:St,city:Ct}}=person;
console.log(`firstName:${fName},lastName:${lName},Address: ${St}-${Ct} `);