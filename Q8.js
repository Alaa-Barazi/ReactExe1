//Destructure an array of complex objects with renamed
//properties and default values:
const people = [
{ firstName: 'John', lastName: 'Doe', age: 30 },
{ firstName: 'Jane', lastName: 'Doe' }
];
//I
const [{firstName:first,lastName:last,age},{firstName:first2,lastName:last2}]=people;
console.log(first,last,age);
console.log(first2,last2);

//I
const [person1,person2]=people;
const{firstName: f,lastName:l,age:a}=person1;
const{firstName: f1,lastName:l1}=person2;
console.log(`Person1- FirstName: ${f} LastName: ${l}  Age: ${a}`);
console.log(`Person2- FirstName: ${f1} LastName: ${l1}`);
