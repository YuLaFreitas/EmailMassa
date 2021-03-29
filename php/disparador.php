<?php

function enviarEmail($de, $para, $assunto,
                     $mensagem, $anexo){

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'from:' . $de.'<'. $de . '>';

    $disparar = mail($para,$assunto,$mensagem,$headers);

    if($disparar){
        echo "<h1>Email enviado</h1>";
    }else{
        echo "<h1>Erro</h1>";
    }


}





