<?php
include 'db.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];


    $sql = "SELECT id, password FROM admin WHERE email = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conn->error);
    }
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashed_password);
        $stmt->fetch();
        if (password_verify($password, $hashed_password)) {
            $_SESSION['admin_id'] = $id;
            header("Location: admin_dashboard.php");
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        $stmt->close();
        $sql = "SELECT id, contraseña FROM clientes WHERE email = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die("Error en la preparación de la consulta: " . $conn->error);
        }
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        
        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $hashed_password);
            $stmt->fetch();
            if (password_verify($password, $hashed_password)) {
                $_SESSION['cliente_id'] = $id;
                header("Location: list_products.php");
                exit();
            } else {
                echo "Contraseña incorrecta";
            }
        } else {
            echo "Correo electrónico no registrado";
        }
    }
    $stmt->close();
}
$conn->close();
?>
