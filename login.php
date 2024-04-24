<?php
// Simulação de autenticação no servidor
$validUsername = "usuario";
$validPassword = "senha";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $username = $data["username"];
    $password = $data["password"];

    if ($username === $validUsername && $password === $validPassword) {
        // Autenticação bem-sucedida
        $response = array("success" => true);
    } else {
        // Autenticação falhou
        $response = array("success" => false, "message" => "Usuário ou senha inválidos.");
    }

    header("Content-Type: application/json");
    echo json_encode($response);
}
?>
