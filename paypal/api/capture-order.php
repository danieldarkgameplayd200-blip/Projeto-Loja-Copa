<?php
require_once __DIR__ . '/paypal-client.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    paypal_json_response(['error' => 'Método não permitido.'], 405);
}

$input = json_decode(file_get_contents('php://input'), true);
$orderId = $input['orderID'] ?? '';

if ($orderId === '') {
    paypal_json_response(['error' => 'orderID não informado.'], 400);
}

$accessToken = paypal_access_token();
$capture = paypal_request('POST', '/v2/checkout/orders/' . rawurlencode($orderId) . '/capture', [], $accessToken);

paypal_json_response($capture);
