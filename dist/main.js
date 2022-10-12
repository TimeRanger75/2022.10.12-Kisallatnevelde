let lista=document.getElementById("lista");
lista.textContent='';
let kaloria=0;

function melegszendvics(){
    let listaElem=document.createElement('li');
    listaElem.textContent="melegszendvics <i>272</i>";
    lista.appendChild(listaElem);
    kaloria+=272;
    document.getElementById('kaloria').innerHTML="Össz kalória: <b>"+kaloria+"</b>";
    etelek.append(new Etel("melegszendvics",272));
    console.log(etelek);
}

function steak(){
    let listaElem=document.createElement('li');
    listaElem.textContent="steak <i>212</i>";
    lista.appendChild(listaElem);
    kaloria+=212;
    document.getElementById('kaloria').innerHTML="Össz kalória: <b>"+kaloria+"</b>";
    etelek.push(new Etel("steak",212));
    console.log(etelek);
}

function viz(){
    let listaElem=document.createElement('li');
    listaElem.textContent="almalé <i>100</i>";
    lista.appendChild(listaElem);
    kaloria+=100;
    document.getElementById('kaloria').innerHTML="Össz kalória: <b>"+kaloria+"</b>";
    etelek.push(new Etel("almalé",100));
    console.log(etelek);
}

function gomb(){
    lista.textContent="";
    kaloria=0;
    document.getElementById('kaloria').innerHTML="Össz kalória: <b>"+kaloria+"</b>";
    etelek=[];
}

class Etel{
    #nev;
    #kaloria;

    constructor(nev, kaloria){
        this.#nev=nev;
        this.#kaloria=kaloria;
    }
}

let etelek=new Etel();

function init(){
    document.getElementById('melegszendvics')
    .addEventListener('click', melegszendvics);
    document.getElementById('steak')
    .addEventListener('click', steak);
    document.getElementById('viz')
    .addEventListener('click', viz);
    document.getElementById('gomb')
    .addEventListener('click', gomb);
}

document.addEventListener('DOMContentLoaded', init)
