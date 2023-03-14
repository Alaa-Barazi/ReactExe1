// Refactor the following exercise
var obj = {
    numbers: {
        a: 1,
        b: 2
    },
};

const {numbers:{ a, b }} = obj;
console.log(a, b);
