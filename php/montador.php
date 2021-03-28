<?php
$de = $_POST['de'];
$para = $_POST['para'];
$mensagem = $_POST['texto'];
$anexo = $_POST['anexo'];
$variavel = $_POST['variavel'];

echo "<h1>de: ${de} para: ${para} <br>" . ("Mensagem: ${mensagem} / Variavel: ${variavel}<br>" .
        "anexo: ${anexo}</h1>");

