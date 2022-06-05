const escolhasFormulario = document.getElementById('escolhasFormulario');
const pensamentoOpcao = document.getElementById('pensamentoOpcao');
const simNaoOpcao = document.getElementById('simNaoOpcao');
const conselhoOpcao = document.getElementById('conselhoOpcao');
const buttonEnviar = document.getElementById('buttonEnviar');

// pos clicar no 
const blocoResposta = document.getElementById('blocoResposta');
const energiaQuestao = document.getElementById('energiaQuestao');
const oQuePensa = document.getElementById('oQuePensa');
const conselhoFinal = document.getElementById('conselhoFinal');


// tarot
const tarotCard = document.getElementById('tarotCard');
const tarotBack = document.getElementById('tarotBack');

// ao clicar no botao, ira capturar os dados do formulario

let energia;
let resposta1 = '';
let resposta2 = '';
let resposta3 = '';
let sorteado;
let num = 0;


const numeroAleatorio = () => {

    const min = Math.ceil(0);
    const max = Math.floor(21);
    num = Math.floor(Math.random() * (max - min)) + min;


    
}


buttonEnviar.addEventListener('click', (e) => {

    e.preventDefault();
    sorteado = numeroAleatorio();
    resposta1 = pensamentoOpcao.checked;
    resposta2 = simNaoOpcao.checked;
    resposta2 = conselhoOpcao.checked;

    energia = tarotLove[0].energy;
    imagem = tarotLove[0].image;
    tarotBack.style.backgroundImage = `url(${imagem})`

    if (resposta1) {
        resposta1 = tarotLove[0].question;
    } else {
        resposta1 = null;
    }
    
    if (resposta2) {
        resposta2 = tarotLove[0].simNao;
    } else {
        resposta2 = null;
    }
    
    if (resposta3) {
        resposta3 = tarotLove[0].conselho;
    } else {
        resposta3 = null;
    }

    if (!resposta3 && !resposta2 && !resposta1) {

        const atencao = document.getElementById('atencaoPopUp');
        atencao.style.display = 'block';

    } else {
        buttonEnviar.innerHTML = 'Jogar de novo';
        mostrarRespostas(resposta1, resposta2, resposta3);
    }



    console.log(resposta1, resposta2, resposta3)


   

});

const viraCarta = () => {



}


const mostrarRespostas = (rep1, rep2, rep3) => {

    blocoResposta.style.display = 'flex';
    blocoResposta.style.flexDirection = 'collumn';
    blocoResposta.style.justifyContent = 'center';
    blocoResposta.style.alignItems = 'center';

    
    energiaQuestao.innerHTML = rep1;
    oQuePensa.innerHTML = rep2;
    conselhoFinal.innerHTML = rep3;

}

