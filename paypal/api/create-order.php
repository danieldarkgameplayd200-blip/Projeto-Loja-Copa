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
$items = [];

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

    if (!empty($input['items']) && is_array($input['items'])) {
        $itemTotal = 0;

        foreach ($input['items'] as $item) {
            $name = substr(trim((string) ($item['name'] ?? 'Produto Ghost Shop')), 0, 127);
            $quantity = max(1, (int) ($item['quantity'] ?? 1));
            $unitValue = (float) ($item['unit_amount']['value'] ?? 0);

            if ($unitValue <= 0) {
                continue;
            }

            $items[] = [
                'name' => $name,
                'sku' => substr(trim((string) ($item['sku'] ?? 'GS')), 0, 127),
                'quantity' => (string) $quantity,
                'category' => 'PHYSICAL_GOODS',
                'unit_amount' => [
                    'currency_code' => $currency,
                    'value' => number_format($unitValue, 2, '.', ''),
                ],
            ];

            $itemTotal += $quantity * $unitValue;
        }

        if ($itemTotal > 0) {
            $value = number_format($itemTotal, 2, '.', '');
        }
    }
}

$purchaseUnit = [
    'reference_id' => 'GHOST-' . time(),
    'description' => $description,
    'custom_id' => 'ghost-shop-' . max(1, count($items)) . '-itens',
    'amount' => [
        'currency_code' => $currency,
        'value' => $value,
    ],
];

if (!empty($items)) {
    $purchaseUnit['items'] = $items;
    $purchaseUnit['amount']['breakdown'] = [
        'item_total' => [
            'currency_code' => $currency,
            'value' => $value,
        ],
    ];
}

$order = paypal_request('POST', '/v2/checkout/orders', [
    'intent' => 'CAPTURE',
    'purchase_units' => [$purchaseUnit],
], $accessToken);

paypal_json_response($order);
