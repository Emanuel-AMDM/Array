const latinhas = ['coca-cola', 'sprite']; //declara array e recebe os elementos
console.log(latinhas);

latinhas.push('colecao-especial'); //adiciona um elemento ao final do array
console.log(latinhas);

//filtra os eletemtos do array
//quando for verdadeiro ele retorna a busca, pois é um filto(filter)
//quando falso ele tira de dentro do array
//e armazena o resultado dentro da minha nova varivel(const latinhasAtualizadas)
const latinhasNaoAtualizadas = latinhas.filter(function(latinha){
    return latinha !== 'sprite';
});

console.log(latinhasNaoAtualizadas);
