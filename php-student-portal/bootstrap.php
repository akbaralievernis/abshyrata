<?php
declare(strict_types=1);

$config = require __DIR__ . '/config.php';

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_name($config['session_name']);
    session_set_cookie_params(
        $config['session_lifetime'],
        '/',
        '',
        (bool) $config['session_secure'],
        true
    );
    session_start();
}

$now = time();
if (!isset($_SESSION['_last_activity'])) {
    $_SESSION['_last_activity'] = $now;
} else {
    $idle = $now - (int) $_SESSION['_last_activity'];
    if ($idle > (int) $config['session_lifetime']) {
        $_SESSION = [];
        session_destroy();
        session_start();
    }
    $_SESSION['_last_activity'] = $now;
}

header('X-Frame-Options: DENY');
header('X-Content-Type-Options: nosniff');

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth.php';

if (empty($_SESSION['_csrf'])) {
    $_SESSION['_csrf'] = bin2hex(random_bytes(16));
}

define('APP_NAME', (string) $config['app_name']);
define('BASE_URL', (string) $config['base_url']);
