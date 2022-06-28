const form = document.querySelector('#formulario'); //SELECIONOU O FORMULÁRIO E ATRIBUIU NA VARIAVEL FORM

form.addEventListener('submit', function (evento) {
    evento.preventDefault();        //preventDefault para garantir que irá recarregar a página após o envio
    // console.log('Evento previnido');
    // setResultado ('Ola Mundo');
    const inputPeso = evento.target.querySelector('#formulario-peso');  //Pega todo o input do peso
    const inputAltura = evento.target.querySelector('#formulario-altura');//Pega todo o input da altura
    
    const peso = Number(inputPeso.value);   //Pega o valor que está no input
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso Inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura Inválida", false);
        return;
    }

    const imc = getImc(peso, altura);

    console.log(peso, altura);
});

function getImc(peso, altura) {
    
}

function criaP () {
    const parag = document.createElement('p');  //Criou um novo elemento (parágrafo) e atribuiu a parag
    return parag
    // parag.classList.add('nomeClasse'); //Criou a classe (PARAGRAFO-RESULTADO) para a constante p atribuida anteriormente
    // parag.innerHTML = 'Filho da DIV';         //Mostrar no elemento P escrito 'Qualquer Coisa'
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado'); //SELECIONOU A DIV COM ID RESULTADO E ATRIBUIU EM UMA VARIÁVEL
    resultado.innerHTML = '';       //innerHTML para ser mostrado no HTML atribuido ao #resultado

    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p);           //Colocou o elemento P como filho do resultado (div do html)
}