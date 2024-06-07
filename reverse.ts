const fruits = ['apple', 'grape'];

//retorna os elementos ao contrario, no reverso... so rodar que vc vai ver
const fruitsReverse = fruits.reverse();

console.log(fruits);
console.log(fruitsReverse);


//criar novo array apartir do reverse, ele mantem como deve ser a ordem dos arrays

const fruitsReverse2 = [...fruits].reverse();

console.log(fruits);
console.log(fruitsReverse2);