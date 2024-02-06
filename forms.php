<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter os dados do formulário
    $nome = $_POST['star'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Configurar o e-mail de destino
    $destinatario = "ewerton.jose.silva77@gmail.com";

    // Montar o corpo do e-mail
    $assunto = "Nova mensagem do formulário de contato";
    $corpo_email = "Estrela: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Enviar o e-mail
    if (mail($destinatario, $assunto, $corpo_email)) {
        echo "O e-mail foi enviado com sucesso.";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
