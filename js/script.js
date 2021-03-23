var n = 0;
var t = 0;
var c = 0;


function poup() {
    window.open('index.html#variavel', 'popup, width=200, height=100, scrolling=auto, top=0, left=0');
}

function addVariavel() {
    document.getElementById('varPainel').innerHTML +=
        "<div id=\"cardVar" + n + "\" title=\"Variavel\"  draggable=\"true\" class=\"col card\""
        +" ondragstart=\"drag(event)\">"
        + "<input type=\"text\" id=\"vari" + n +"\" class=\"ref\" />" 
    + "<button class=\"btn btn-dark\" onclick=\"remVariavel('cardVar" + n + "')\">-</button>"     
        + "</div>"
        ;

    n++;
};

function addTexto(){
    document.getElementById('variavel').innerHTML +=
        "<div id=\"cardTxt" + t + "\" title=\"Texto\" draggable=\"true\" class=\"card\""
        + " ondragstart=\"drag(event)\">"
        + "<textarea id='txt" + t + "'></textarea > "
    + "<button class=\"btn btn-dark\" onclick=\"remVariavel('cardTxt" + t + "');\">-</button>"
        ;
    t++;
};

function addColuna() {
    document.getElementById('corpo').innerHTML +=
        "<div id=\"cardCol" + c + "\" title=\"Coluna" + c + "\" class=\"cardCol\""
    + "ondrop=\"drop(event)\" draggable=\"true\" ondragover=\"allowDrop(event)\">"
    + "<button class=\"btn btn-dark\" onclick=\"remVariavel('cardCol" + c + "');\">-</button>"
        ;
    c++;
};

function allowDrop(ev) {
    ev.preventDefault();
};
function drag(ev) {
    ev.dataTransfer.setData('texto', event.target.id);
    console.log("Pegou");
};
function drop(ev) {
    const id = event.dataTransfer.getData('texto');
    const element = document.getElementById(id);
    const zone = event.target;
    zone.appendChild(element);
    event.DataTransfer.clearData();

    console.log("soltou");
};

function remVariavel(tag) {

    var txt = confirm("Deseja que seja exluido esta variavel ?");
    
    if (txt == true) {
        document.getElementById(tag).remove();
        window.alert(" Excluido");
    }
    else {
        window.alert("Sem problemas...");
    }
    
};
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