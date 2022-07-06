function calculadora() {
    const operacao = prompt('Seja Bem Vinda a Calculadora do Veigas!\n\nEscolha uma Operação:\n\n 1 -Soma (+)\n 2 - Sutração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)\n\n  ');

    if (!operacao || operacao >= 7) {
        alert('Erro!! - Digite a operação valida!')
        calculadora();
    } else {
    
let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

 if(!n1 || !n2) {
    alert('Erro!!- Digite a Parametros Invalido!')
    calculadora();
 } else {

function soma(){
    resultado = n1 + n2;
    alert(`A Soma de ${n1} mais ${n2} é igual a ${resultado}`)
    novaOperacao();
}
function subtracao(){
    resultado = n1 - n2;
    alert(`A Subtração de ${n1} Menos ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function multiplicacao(){
    resultado = n1 * n2;
    alert(`A Multiplicação de ${n1} com ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function divisao_Real(){
    resultado = n1 / n2;
    alert(`A divisão entre ${n1} e ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function divisao_Inteira(){
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} elevado à ${n2} é igual a ${resultado}`)
    novaOperacao();
}
function retorno(){
    alert('Digite a opção valida!')
    calculadora();
}


function novaOperacao() {
    let opcao = prompt('Deseja fazer Outra operação?\n 1 - Sim\n 2- Não');
   
    if (opcao == 1) {
        calculadora();
    }
    else if (opcao == 2)
     {
        alert('Até mais!!\n\n Calculadora do Veigas agradece!')
     }

    else {
        alert('Digite a opção valida!')
        novaOperacao();
    }
}

if (operacao == 1) {
    soma();
} else if (operacao == 2){
    subtracao();
} else if (operacao == 3){
    multiplicacao();
} else if (operacao == 4){
    divisao_Real();
} else if (operacao == 5){
    divisao_Inteira();
} else if (operacao == 6){
    potenciacao();
}


        }
    }
}

calculadora();