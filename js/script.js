let n = 0;
let t = 0;
let c = 0;
let h = 0;
let b = 0;
let r = 0;
let o = 0;
let caminho;
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
    document.getElementById('corpoTexto').innerHTML +=
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


function addVariavel() {

    document.getElementById('varPainel').innerHTML +=
        "<div id=\"cardVar" + n + "\" title=\"Variavel\"  draggable=\"true\" class=\"col card\""
        +" ondragstart=\"drag(event)\">"
        //+ "<input type=\"text\" id=\"vari" + n +"\" name='variavel" + n +"'/>"
        + "<div class='col-md-4'> "
        + "<input type='file' class='botao' onchange='addGuardar(this)'> "
        + "<button class='botao' onclick=\"remVariavel('cardVar" + n + "')\">X</button>" +
        + "</div></div>";

    n++;
}

function addGuardar(arquivo){
    var leitor = new FileReader();
    leitor.readAsText(arquivo);

    caminho = leitor;
    console.log(caminho);
    let texto = csv2json(caminho);
    document.getElementById('varPainel').innerHTML +=
        "<h1>"+texto.length + "</h1>";

}
function csv2json(csv){
    console.log(csv);
    var linha = csv.split("\n");
    var resultado = [];
    var cabecalho = linha[0].split(",");

    for(var i=1; i<linha.length ;i++){
        var obj = {};
        var linhasCorridas = linha[i].split(",");

        for(var j=0; j<cabecalho.length; j++){
            obj[cabecalho[j]] = linhasCorridas[j];
        }
        resultado.push(obj);
    }
  //return resultado;
return JSON.stringify(resultado);
}

function copiar(tag) {
    //var g = tag;
    var copiar = document.getElementById(tag);
    const t = tag.get;
    t.select;
    //tag.select;
    document.execCommand('copy');
    //alert(tag);

}
