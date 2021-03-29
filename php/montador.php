<?php
$de =  $_POST['de'];
$para =  $_POST['para'];
$anexo =  $_POST['anexo'];
$variavel = [];
$texto = [];

$v=0; $t=0;

  do{
      if(!empty($_POST['variavel'.$v])) {
          $variavel[$v] = $_POST['variavel' . $v];
          echo "<h1> Variavel: " . $variavel[$v] . "</h1>";
      }
      $v = $v +1;
}while(isset($_POST['variavel'.$v]));

  do{
      if(!empty($_POST['texto'.$t])) {
          $texto[$t] = $_POST['texto' . $t];
          echo "<h1>Texto: " . $texto[$t] . "</h1>";
      }
      $t = $t +1;

}while(isset($_POST['texto'.$t]));

echo sprintf("<h1>De: %s para: %s <br>anexo: %s</h1>",
    $de, $para, $anexo);