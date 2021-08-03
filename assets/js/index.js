/* Exercício 01 */
/* 
console.log("Olá Mundo");

alert("Olá Mundo");
 */

/* Exercício 02 */
/* 
console.log(5+5);

alert(25555 + 1000); */

/* /* Exercício 03 */

/* function exibirNome(){
    let nomeExibido;
    nomeExibido = document.getElementById("nome").value;
    alert(`Bem vinda funcionária ${nomeExibido}`);
    
}

let btnExibirNome;
btnExibirNome = document.getElementById("btn-exibir-nome");
btnExibirNome.addEventListener("click",exibirNome);
*/

/* Exercício 04 */

/* function exibirQtLetras(){
    let nomeInserido;
    nomeInserido = document.getElementById("txt-nome").value;
    alert(`Tem a quantidade ${nomeInserido.length} nessa porra, caralho!!!`);
}

let btnExibirQt;
btnExibirQt = document.getElementById("btn-exibir-qt");
btnExibirQt.addEventListener("click",exibirQtLetras); */

/* Exercício 05 */
/* 
function interruptor(){
    const lampadaApagada = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg";
    const lampadaAcessa = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg";
    let lampada;

    lampada = document.getElementById("img-luz");

    if (lampada.src == lampadaApagada){
        lampada.src=lampadaAcessa;
        lampada.alt="Lampada esta acessa";

    } else {
        lampada.src=lampadaApagada;
        lampada.alt="Lampada esta apagada";
    }
    
}

let lampadaElemento;
lampadaElemento = document.getElementById("img-luz");
lampadaElemento.addEventListener("click", interruptor);
 */

/* Exercício 06 *//* 
function interruptor(){
    const lampadaApagada = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg";
    const lampadaAcessa = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg";
    let lampada;

    lampada = document.getElementById("img-luz");

    if (lampada.src == lampadaApagada){
        lampada.src=lampadaAcessa;
        lampada.alt="Lampada esta acessa";

    } else {
        lampada.src=lampadaApagada;
        lampada.alt="Lampada esta apagada";
    }
    
}

let lampadaElemento;
lampadaElemento = document.getElementById("img-luz");
lampadaElemento.addEventListener("click", interruptor); */

/* Exercício 07 */

/* function exibirSaudacao(){
    let nome;
    let sobrenome;
    nome = document.getElementById("txt-nome").value;
    sobrenome = document.getElementById("txt-sobrenome").value;
    alert(`Olá ${nome} ${sobrenome}`);
    
}

let saudacao;
saudacao = document.getElementById("btn-saudacao");
saudacao.addEventListener("click", exibirSaudacao); */

/* Exercício 08 */
/* 
function somar() {
    const soma1 = document.getElementById("soma1");
    const soma2 = document.getElementById("soma2");
    const inputResultado = document.getElementById("Resultado");
    let numero1 = Number(soma1.value);
    let numero2 = Number(soma2.value);

    if (numero1 == 0 || numero2 == 0) {
        alert("Número invalido!");
    } else {
        let resultado = numero1 + numero2;
        inputResultado.value = resultado;
        soma1.value = "";
        soma2.value = "";
    }
}

let botaoSomar;
botaoSomar = document.getElementById("btn-soma");
botaoSomar.addEventListener("click", somar);
 */

/* Exercício 09 */
/* 
function alterarParaAzul(){
    const cor = document.getElementById("cor");
    cor.style = "background-color: blue";
}

function alterarParaVerde(){
    const cor = document.getElementById("cor");
    cor.style = "background-color: green";
}

const alterarCorAzul = document.getElementById("btn-azul");
alterarCorAzul.addEventListener("click",alterarParaAzul);

const alterarCorVerde = document.getElementById("btn-verde");
alterarCorVerde.addEventListener("click",alterarParaVerde); */
/* 
Exercicio 10 

const textoResultado = document.getElementById("Resultado");
const texto = 'Esse texto foi inserido pelo JavaScript...';
textoResultado.innerHTML = texto; */

/*  Exercicio 11 
function aparecerTexto (){
    const divResultado = document.getElementById("Resultado");
    const textin = 'Esse texto foi inserido pelo JavaScript...';
    divResultado.innerHTML = textin;

}

const botaoResultado = document.getElementById("botao-resultado");
botaoResultado.addEventListener("click",aparecerTexto);
 */
/* 
Exercicio 12

let divisao = 5/2;
console.log(divisao);
 */
/* Exercicio 13
function calcular5PorCento (valorParaDescontar){
    let resultadoComDesconto = valorParaDescontar * 5 ;
    return resultadoComDesconto;
}
console.log(calcular5PorCento(200));
  */

/* Exercicio 14  */

/* function return2Numeros(valor1, valor2) {
    let resultado = valor1 * valor2;
    return resultado;
}

let resultadoUm = return2Numeros(valor1,10);
let resultadoDois = return2Numeros(8,16);

console.log(resultadoUm);
console.log(resultadoDois);
 */

/* Exercicio 15  */
/* 
function somarResultado(){
    const numero1 = document.getElementById("numero1"); // html(input)
    const numero2 = document.getElementById("numero2"); // html * todo input é string *
    let number1 = Number(numero1.value);  // valor do input virando numero
    let number2 = Number(numero2.value); // valor do input virando numero
    let resultado = number1 + number2; // variavel do resultado do valor do input
    alert(resultado);
}

let botaoSomar;
botaoSomar = document.getElementById("botao-Somar"); // o html botão 
botaoSomar.addEventListener("click", somarResultado); */ 
// trazendo a funçao para o botao
//   quando o botao for clicado, somar resultado;
