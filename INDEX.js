var nome = "Vin Diesel";
var cargo = "CEO STV"
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var nomeHtml = document.getElementById("nome-no-html")
var cargoHtml = document.getElementById("cargo-no-html");

function colocarNomeNohtml(nome){
    nomeHtml.innerHTML = nome;
}
function colocarCargoNohtml(cargo){
cargoHtml.innerHTML = cargo;
}

function clickNoProjetos(){
    console.log("Clicou no botão Projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNohtml(nome);
colocarCargoNohtml(cargo);


