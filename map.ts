const fruits = ['apple', 'grape'];

//retorna todos os elementos iguais, nesse exemplo ele faz todos os elementos do array ser apple
const apples = fruits.map(function(fruits){
    return 'apple';
});

console.log(fruits);
console.log(apples);

//se eu quiser repetir um <li> para fazer uma lista com todos os elementos, o map serve para mapear as repetições
//ele vai repetir apenas o que for string
const apples2 = fruits.map(function(fruits){
    return '<li>' + fruits + '</li>';
});

console.log(fruits);
console.log(apples2);