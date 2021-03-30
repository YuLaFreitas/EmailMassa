let n = 0;
let t = 0;
let c = 0;
let h = 0;
let b = 0;
let r = 0;
let o = 0;

function addCabecalho(id){

    document.getElementById(id).innerHTML +=
    "<div  title='card' class='card' id='cardV"+h+"'"
    +" draggable='true'  ondragstart='drag(event)'>"
    +"<input type='text' id='cad"+h+"' "
    +"onkeyup=\"document.getElementById('cabecalho"+h+"').innerText = this.value\" >"
    +"<h1 id='cabecalho"+h+"'></h1>"
    +"</div>";
        h++;
}

function addCorpo(){
    document.getElementById('varPainel').innerHTML +=
    b++;
}
function addRodape(){
    document.getElementById('varPainel').innerHTML +=
    r++;
}
function addNota(){
    document.getElementById('varPainel').innerHTML +=
    o++;
}

function addVariavel() {
    document.getElementById('varPainel').innerHTML +=
        "<div id=\"cardVar" + n + "\" title=\"Variavel\"  draggable=\"true\" class=\"col card\""
        +" ondragstart=\"drag(event)\">"
        + "<input type=\"text\" id=\"vari" + n +"\" name='variavel" + n +"'/>"
    + "<button class=\"botao\" onclick=\"remVariavel('cardVar" + n + "')\">X</button>" +
        + "</div>"
        ;

    n++;
}

function addTexto(){
    document.getElementById('variavel').innerHTML +=
        "<div id=\"cardTxt" + t + "\" title=\"Texto\" draggable=\"true\" class=\"card\""
        + " ondragstart=\"drag(event)\">"
        + "<textarea id='txt" + t + "' name='texto" + t + "'></textarea > "
    + "<button class=\"botao\" onclick=\"remVariavel('cardTxt" + t + "');\">X</button>"
        ;
    t++;
}

function addColuna() {
    document.getElementById('corpo').innerHTML +=
     "<div id='cardCol"+c+"' title='coluna"+c+"' class='cardCol'"
    +" ondrop='drop(event)' draggable='true' ondragover='allowDrop(event)'>"
    +"<div class='col-md-4'> <div class='row'>"
    +"<input type='button' value='x' class='botao'"
    +" onclick=\"remVariavel('cardCol"+c+"');\">"
    +"</div><div class='row'>"
    +"<input type='button' value='+' class='botao' "
    +"onclick=\"addCabecalho('cardCol"+c+"');\">"
    +"</div>" +"</div> " + "</div>";
    c++;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('texto', event.target.id);
    console.log("Pegou");
}

function drop(ev) {
    const id = event.dataTransfer.getData('texto');
    const element = document.getElementById(id);
    const zone = event.target;
    zone.appendChild(element);
    event.DataTransfer.clearData();

    console.log("soltou");
}

function remVariavel(tag) {

    let txt = confirm("Deseja que seja exluido esta variavel ?");
    
    if (txt == true) {
        document.getElementById(tag).remove();
        window.alert(" Excluido");
    }
    else {
        window.alert("Sem problemas...");
    }
    
}
/*
function copiar_link(txt) {
    var text = txt;
    const linke = text;//document.getElementById('link');

    linke.select;
    document.execCommand('copy');
    alert("teste " + linke);

}; */

function copiar(tag) {
    //var g = tag;
    var copiar = document.getElementById(tag);
    const t = tag.get;
    t.select;
    //tag.select;
    document.execCommand('copy');
    //alert(tag);

}