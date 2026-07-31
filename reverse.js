const numbers = [87, 67, 89, 98];
const reversed = numbers.reverse()
console.log(numbers);

const friends = ['abul', 'babul', 'culbul', 'dabul',];
const afterReverse = [];
for (const friend of friends){
    console.log(friend);
    afterReverse.unshift(friend);
    console.log(afterReverse);
}

const digits = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < digits.length; i++){
    console.log(i, digits[i]);
}