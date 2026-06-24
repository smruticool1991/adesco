<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data    = json_decode(file_get_contents('php://input'), true) ?? [];
$name    = htmlspecialchars(trim($data['name']    ?? ''), ENT_QUOTES, 'UTF-8');
$rawEmail = trim($data['email'] ?? '');
$email   = filter_var($rawEmail, FILTER_VALIDATE_EMAIL);
$phone   = htmlspecialchars(trim($data['phone']   ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit;
}

$to      = 'tim.adekola1@gmail.com';
$subject = "Contact Form: $name";
$body    = "Name: $name\r\nEmail: $email\r\nPhone: $phone\r\n\r\nMessage:\r\n$message";
$headers = implode("\r\n", [
    'From: contact@adescowesternranch.ca',
    "Reply-To: $email",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again.']);
}
