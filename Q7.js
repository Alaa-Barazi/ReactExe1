//Destructure an object with deeply nested properties
//and a function:
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        coordinates: {
            latitude: 37.7749,
            longitude: -122.4194
        }
    },
    getFullName() {
        return `${name} Doe`;
    }
};


const { name, address: { street, city, state, coordinates: { latitude, longitude } }, getFullName } = person;
console.log(`Name: ${name}, Address: ${street}-${city}-${state}`);
console.log(`Coordinates: ${latitude}:${longitude}, Function: ${getFullName()}`);


