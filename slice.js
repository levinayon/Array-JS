const numbers = [1, 2, 3, 4, 5]
const slice = numbers.slice(2, 3)
console.log(slice);
console.log(numbers);

const parts = numbers.splice(2, 2, 77);
console.log(parts);
console.log(numbers);