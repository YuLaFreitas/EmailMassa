<?php
$de =  $_POST['de'];
$para =  $_POST['para'];
$anexo =  $_POST['anexo'];
for($v = 0; $v >10; $v++) {
    if (isset($_POST['variavel'.$v]) || empty($_POST['variavel'.$v])){
        //$variavel[$v] = $_POST['variavel' . $v];
        echo $_POST['variavel'.$v];//$variavel[$v];
}
}

for($t = 0; $t >10; $t++) {
 if(isset($_POST['texto'.$t])||empty($_POST['texto'.$t])) {
     //$mensagem[$t] = $_POST['texto'.$t];
     echo $_POST['texto' . $t];//$mensagem[$t];
 }
    }
//if(isset($_POST['de'])||empty($_POST['de'])) $de =  ""; else $de =  $_POST['de'];
//if(isset($_POST['para'])||empty($_POST['para'])) $para =  ""; else $para =  $_POST['para'];
//if(isset($_POST['anexo'])||empty($_POST['anexo'])) $anexo =  ""; else $anexo =  $_POST['anexo'];
//$mensagem = []; // = $_POST['texto'];
//$variavel = [];// = $_POST['variavel'];


echo sprintf("<h1>De: %s para: %s <br>anexo: </h1>", $de, $para);

