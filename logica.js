let calcular = document.querySelector('#bt_calcular')
let peso
let altura
let escolha

calcular.onclick = function calcular_imc() {
    peso = parseFloat(document.querySelector('#peso').value)
    altura = parseFloat(document.querySelector('#altura').value)
    escolha = document.querySelector('#selecao_genero').value

    console.log(peso, altura, escolha);

}