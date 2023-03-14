//Destructure an object with computed property names
//and a function:
const propName = 'person';
const obj = {
    [propName]: {
        name: 'John',
        age: 30,
        getAddress() {
            return {
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA'
            };
        }
    }
};

const {person:{name,age,getAddress}}=obj;
const {street:st,city:ct,state:stt}=getAddress();
console.log(`Name: ${name}, Age:${age}`);
console.log(`street: ${st}, city: ${ct}, state:${stt}`);