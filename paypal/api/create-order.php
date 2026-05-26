<?php
require_once __DIR__ . '/paypal-client.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    paypal_json_response(['error' => 'Método não permitido.'], 405);
}

$accessToken = paypal_access_token();
$input = json_decode(file_get_contents('php://input'), true);
$value = PAYPAL_ORDER_VALUE;
$currency = PAYPAL_CURRENCY;
$description = PAYPAL_PRODUCT_NAME;

if (is_array($input)) {
    if (isset($input['value']) && is_numeric($input['value']) && (float) $input['value'] > 0) {
        $value = number_format((float) $input['value'], 2, '.', '');
    }

    if (isset($input['currency']) && preg_match('/^[A-Z]{3}$/', $input['currency'])) {
        $currency = strtoupper($input['currency']);
    }

    if (!empty($input['description'])) {
        $description = substr(trim((string) $input['description']), 0, 120);
    }
}

$order = paypal_request('POST', '/v2/checkout/orders', [
    'intent' => 'CAPTURE',
    'purchase_units' => [
        [
            'description' => $description,
            'amount' => [
                'currency_code' => $currency,
                'value' => $value,
            ],
        ],
    ],
], $accessToken);

paypal_json_response($order);
