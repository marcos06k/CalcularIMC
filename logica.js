let peso
let altura
let escolha
let imc
const calcular = document.querySelector('#bt_calcular')
const mensagemResultado = document.querySelector('#resultado')

calcular.onclick = function calcular_imc() {
    peso = parseFloat(document.querySelector('#peso').value)
    altura = parseFloat(document.querySelector('#altura').value)
    escolha = document.querySelector('#selecao_genero').value

    //cálculo 
    imc = peso / Math.pow(altura, 2)

    switch (escolha) {

        case '1':
            if (imc < 18.6) {
                mensagemResultado.innerHTML = " <p>Baixo do peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            }
            else if (imc > 24.9) {
                mensagemResultado.innerHTML = "<p>Acima do peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            } else {
                mensagemResultado.innerHTML = "<p>Peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            }
            break;

        case '2':
            if (imc < 18.6) {
                mensagemResultado.innerHTML = " <p>Baixo do peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            }
            else if (imc > 24.9) {
                mensagemResultado.innerHTML = "<p>Acima do peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            } else {
                mensagemResultado.innerHTML = "<p>Peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            }
            break;

        case '3':

            if (imc < 18.6) {
                mensagemResultado.innerHTML = " <p>Baixo do peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            }
            else if (imc > 24.9) {
                mensagemResultado.innerHTML = "<p>Acima do peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            } else {
                mensagemResultado.innerHTML = "<p>Peso ideal</p> <p> IMC: " + imc.toFixed(1) + "</p>  <img src='' alt=''>"
            }
            break;

        default:
    }
}