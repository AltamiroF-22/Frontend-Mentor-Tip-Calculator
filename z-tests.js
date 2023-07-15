const valorInicial = 142.55;
const porcentagem = 15;
const numeroDePessoas = 5;
let porcentagemPorPessoa;
let totalPessoa;

porcentagemPorPessoa =porcentagem*(valorInicial / numeroDePessoas)/100

totalPessoa = (valorInicial/numeroDePessoas + porcentagemPorPessoa).toFixed(2)

console.log(`A porcentagem individual é de: ${porcentagemPorPessoa}`);
console.log(`O valor total individual é de: ${totalPessoa}`);

