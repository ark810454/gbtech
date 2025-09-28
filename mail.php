<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
header("Content-Type: application/json"); // Définir le type de contenu JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lire les données JSON
    $data = json_decode(file_get_contents("php://input"), true);

    // Vérifiez si les clés existent
    if (isset($data['name'], $data['sujet'], $data['email'], $data['contenu'], $data['sendTo'])) {
        $nom = $data['name'];
        $sujet = $data['sujet'];
        $email = $data['email'];
        $message = $data['contenu'];
        $emailTo = $data['sendTo'];

        $response = ["success" => false];

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'jeremiekimpioka52@gmail.com';
            $mail->Password = 'onucrcjjmxwzlgvb'; // À remplacer par une méthode sécurisée
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            // Destinataires
            $mail->setFrom($email, $nom);
            $mail->addAddress($emailTo); // Destinataire
            $mail->addReplyTo($email, 'Service de communication GB Technology');

            // Contenu
            $mail->isHTML(true);
            $mail->Subject = $sujet;
            $mail->Body = '
            <div><p>De <b>' . htmlspecialchars($nom) . '</b> (' . htmlspecialchars($email) . ')</p>
            <p style="width: fit-content;height: 40px;padding: 10px 20px;border: 1px solid #2C3475;color: #2C3475;border-radius: 5px;">' . htmlspecialchars($message) . '</p></div>';

            $mail->send();
            $response["success"] = true;
        } catch (Exception $e) {
            $response["success"] = false;
            $response["mess"] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

        echo json_encode($response);
    } else {
        echo json_encode(["success" => false, "mess" => "Aucune donnée reçue."]);
    }
} else {
    echo json_encode(["success" => false, "mess" => "Requête non valide."]);
}
?>