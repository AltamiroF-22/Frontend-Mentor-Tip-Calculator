const inputValor = document.querySelector('.inputValor');
const inputpessoa = document.querySelector('.inputPessoas');
const btnReset = document.querySelector('#reset-btn');
let porcentagemPorPessoa;
let totalPessoa;
const buttons = document.querySelectorAll('.btn-porcentagem');
const res1 = document.querySelector('.res-individual-amount');
const res2 = document.querySelector('.res-total');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const erroText = document.querySelector('.erro-text');

        if (erroText) {
            erroText.remove();
            inputpessoa.style.outline = "none";
            inputValor.style.outline = "none";

        }
        if (inputValor.value == 0 ) {
            criaErro(inputValor, "Can't be zero");
            inputValor.style.outline = "#e81414 solid 1px";
            return;
        
        }else if(inputValor.value < 0) {
            criaErro(inputValor, "Can't be below zero");
            inputValor.style.outline = "#e81414 solid 1px";
            return;
        }
        if (inputpessoa.value == 0 ) {
            criaErro(inputpessoa, "Can't be zero");
            inputpessoa.style.outline = "#e81414 solid 1px";
            return;
        }else if(inputpessoa.value < 0){
            criaErro(inputpessoa, "Can't be below zero");
            inputpessoa.style.outline = "#e81414 solid 1px";
            return;
        }

        porcentagemPorPessoa = (button.value * (inputValor.value / inputpessoa.value) / 100);
        totalPessoa = (inputValor.value / inputpessoa.value + porcentagemPorPessoa).toFixed(2);
        res1.innerText = porcentagemPorPessoa.toFixed(2);
        res2.innerText = totalPessoa
        return porcentagemPorPessoa && totalPessoa;
    });
});

btnReset.addEventListener('click', () => {
    inputValor.value = '';
    inputpessoa.value = '';
    res1.innerText = '0.00';
    res2.innerText = '0.00';
    inputpessoa.style.outline = "none";
    inputValor.style.outline = "none";
    
    const erroText = document.querySelector('.erro-text');
    if (erroText) {
      erroText.remove();
    }
  });
  
function criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('erro-text');
    campo.parentNode.insertBefore(div, campo);
}