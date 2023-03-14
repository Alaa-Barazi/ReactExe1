let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers);
/*the second and the third values in the array will be switched. so the output will
be: [10,30,20] */