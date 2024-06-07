const latinhas = ['coca-cola', 'sprite']; //declara array e recebe os elementos
console.log(latinhas);

latinhas.push('colecao-especial'); //adiciona um elemento ao final do array
console.log(latinhas);

//SLICE

//tira o primeiro elemento do array, caso aumente esse numero ele vai tirar 2 elementos e assim por diante
console.log(latinhas.slice(1));
//tira o ultimo elemento do array, caso aumente esse numero ele vai tirar 2 elementos e assim por diante
console.log(latinhas.slice(0, -1));
//tira o primeiro e o ultimo elemento do array, caso aumente esse numero ele vai tirar 2 elementos e assim por diante
console.log(latinhas.slice(1, -1));
//deixa no array ultimo elemento, caso aumente esse numero ele vai deixar 2 elementos e assim por diante
console.log(latinhas.slice(-1));