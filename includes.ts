const latinhas = ['coca-cola', 'sprite']; //declara array e recebe os elementos
console.log(latinhas);

latinhas.push('colecao-especial'); //adiciona um elemento ao final do array
console.log(latinhas);

//includes caso ele encontre vai me tornar "true"
//caso nao encontre vai me retornar "false"
console.log(latinhas.includes('sprite'));
//caso voce saiba a posição do elemento no array e tenha muitos elementos
//você pode procurar apartir de uma posição mais proxima
const found = (latinhas.includes('sprite', 1));
console.log(found);