<?php

include 'disparador.php';

$assunto = $_POST['assunto'];
$de =  $_POST['de'];
$para =  $_POST['para'];
$anexo =  $_POST['anexo'];
$variavel = [];
$texto = [];
$v=0; $t=0;
/*
 * Posso criar um json com dados que altere o texto que recebi, por exemplo
 *O cliente evia o post['texto'] insiro este em um array
 * e este vai buscar uma referência, tipo '[' início ']' fim
 * pego esta referncia, e faço uma consulta em uma lista na tabela que o cliente fornceu,
 * para isso o cliente vai enviar um documento contendo linhas e colunas. com
 * origens e variavel1, variavel2...
 * o sistema pegará este arquivo, e vai criar um json
 *origiem:['email@exemplo.com.br', 'outro@exemplo.com'], variavel1:['nome'
 */
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
  $txtHTML = "<p>".implode("",$texto)."</p>";
  $varHTML = "<p>".implode("",$variavel)."</p>";
    enviarEmail($de, $para, $assunto,$txtHTML, $anexo);
echo sprintf("<h1>De: %s para: %s <br>anexo: %s</h1>",
    $de, $para, $anexo);
