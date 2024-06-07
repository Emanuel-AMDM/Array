const latinhas = ['coca-cola', 'sprite']; //declara array e recebe os elementos
console.log(latinhas);

latinhas.push('colecao-especial'); //adiciona um elemento ao final do array
console.log(latinhas);

//find assim que ele encontrar ele para a execução
//caso ele não encontre vai trazer o primeiro elemento
const latinhaCoca = latinhas.find(function(latinha){
    return latinha == 'coca-cola';
});

console.log(latinhaCoca);

