<?php
require_once __DIR__ . '/../paypal-server-config.php';

function paypal_base_url(): string
{
    return PAYPAL_ENVIRONMENT === 'live'
        ? 'https://api-m.paypal.com'
        : 'https://api-m.sandbox.paypal.com';
}

function paypal_json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function paypal_credentials_are_configured(): bool
{
    return PAYPAL_CLIENT_ID !== 'COLE_AQUI_SEU_SANDBOX_CLIENT_ID'
        && PAYPAL_CLIENT_SECRET !== 'COLE_AQUI_SEU_SANDBOX_CLIENT_SECRET'
        && PAYPAL_CLIENT_ID !== ''
        && PAYPAL_CLIENT_SECRET !== '';
}

function paypal_request(string $method, string $path, ?array $body = null, ?string $accessToken = null): array
{
    $ch = curl_init(paypal_base_url() . $path);
    $headers = [
        'Content-Type: application/json',
        'Accept: application/json',
    ];

    if ($accessToken !== null) {
        $headers[] = 'Authorization: Bearer ' . $accessToken;
    }

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
    ]);

    if ($body !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    }

    $responseBody = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if ($responseBody === false) {
        $error = curl_error($ch);
        curl_close($ch);
        paypal_json_response(['error' => 'Erro de conexão com PayPal.', 'details' => $error], 500);
    }

    curl_close($ch);
    $decoded = json_decode($responseBody, true);

    if ($httpCode >= 400) {
        paypal_json_response([
            'error' => 'PayPal retornou erro.',
            'status' => $httpCode,
            'details' => $decoded ?: $responseBody,
        ], $httpCode);
    }

    return is_array($decoded) ? $decoded : [];
}

function paypal_access_token(): string
{
    if (!paypal_credentials_are_configured()) {
        paypal_json_response([
            'error' => 'Credenciais PayPal não configuradas.',
            'details' => 'Edite paypal-config.js e paypal-server-config.php com os dados da sua app sandbox.',
        ], 500);
    }

    $ch = curl_init(paypal_base_url() . '/v1/oauth2/token');

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_USERPWD => PAYPAL_CLIENT_ID . ':' . PAYPAL_CLIENT_SECRET,
        CURLOPT_HTTPHEADER => [
            'Accept: application/json',
            'Accept-Language: pt_BR',
            'Content-Type: application/x-www-form-urlencoded',
        ],
        CURLOPT_POSTFIELDS => 'grant_type=client_credentials',
    ]);

    $responseBody = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if ($responseBody === false) {
        $error = curl_error($ch);
        curl_close($ch);
        paypal_json_response(['error' => 'Erro ao solicitar token PayPal.', 'details' => $error], 500);
    }

    curl_close($ch);
    $decoded = json_decode($responseBody, true);

    if ($httpCode >= 400 || empty($decoded['access_token'])) {
        paypal_json_response([
            'error' => 'Não foi possível autenticar na API PayPal.',
            'status' => $httpCode,
            'details' => $decoded ?: $responseBody,
        ], 500);
    }

    return $decoded['access_token'];
}
