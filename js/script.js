var n = 0;



function addVariavel() {
    document.getElementById('varPainel').innerHTML +=
        "<div id=\"card" + n + "\" title=\"Variavel\" draggable=\"true\" class=\"card\""
    +" ondragstart=\"drag(event)\">"
    //+"<label for=\"vari" + n + "\">Variavel</label>" 
    + "<input type=\"text\" id=\"vari" + n +"\" class=\"ref\" />" 
    + "<button class=\"btn\" onclick=\"remVariavel('card" + n + "');\">-</button>" 
    + "<input type='text' value='card" + n + "' id='txt" + n +"' disabled>";    
    + "</div>"
        ;

    n++;
};

function allowDrop(ev) {
    ev.preventDefault();
};
function drag(ev) {
    ev.dataTransfer.setData("text", ev.targert.id);
};
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.targert.appendChild(document.getElementById(data));
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