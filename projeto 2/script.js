let numEtapas = document.querySelectorAll('.item').length;
let etapaAtual = 0;
document.querySelector(".carroulsel").style.width = `calc(100vw * ${numEtapas})`;
let numSpan = document.querySelectorAll('.text__item');

for(let i = 0; i<numEtapas; i++){
    createBar();
    barraAtiva();
}
function previous(){
    etapaAtual--;
    if(etapaAtual < 0){
        etapaAtual = numEtapas-1
    }
    if(etapaAtual>=0 && etapaAtual<numEtapas-1){
        barraAtivPrev();
    }
    else{
        firstAtiv();
    }
    barraAtiva();
    updateMargin();
}
function next(){
    etapaAtual++;
    if (etapaAtual > (numEtapas-1)){
        etapaAtual = 0;
    }
    if(etapaAtual >0){
        barraAtivNext();
    }
    else{
        lastAtiv();
    }
    barraAtiva();
    updateMargin();
}
function updateMargin(){
    let newMargin = (etapaAtual * document.body.clientWidth);
    document.querySelector('.carroulsel').style.marginLeft = `-${newMargin}px`;
}

document.querySelector("#prev").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);



function createBar(){
    const barra = document.querySelector(".barras");
    let span = document.createElement("span");
    span.classList.add('bar')
    barra.appendChild(span);
}

function barraAtiva(){
    let barLenght = document.getElementById("bar").childNodes[etapaAtual];
    numSpan[etapaAtual].classList.add('d-block');
    barLenght.classList.add("active");
}
function barraAtivNext(){
    let barLenght = document.getElementById("bar").childNodes[etapaAtual-1];
    numSpan[etapaAtual-1].classList.remove('d-block');
    barLenght.classList.remove("active");
}
function lastAtiv(){
    let barLenght = document.getElementById("bar").childNodes[numEtapas-1];
    numSpan[numEtapas-1].classList.remove('d-block');
    barLenght.classList.remove("active");
}
function firstAtiv(){
    let barLenght = document.getElementById("bar").childNodes[0];
    numSpan[0].classList.remove('d-block');
    barLenght.classList.remove("active");
}
function barraAtivPrev(){
    let barLenght = document.getElementById("bar").childNodes[etapaAtual+1];
    numSpan[etapaAtual+1].classList.remove('d-block');
    barLenght.classList.remove("active");
}
setInterval(next, 10000)