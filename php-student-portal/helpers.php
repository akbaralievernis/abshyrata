<?php
declare(strict_types=1);

function e($value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function redirect(string $path): void
{
    header('Location: ' . $path);
    exit;
}

function csrf_token(): string
{
    return (string) ($_SESSION['_csrf'] ?? '');
}

function csrf_validate($token): bool
{
    $t = (string) $token;
    $s = (string) ($_SESSION['_csrf'] ?? '');

    return $t !== '' && $s !== '' && hash_equals($s, $t);
}

function flash_set(string $type, string $message): void
{
    if (!isset($_SESSION['_flash'])) {
        $_SESSION['_flash'] = [];
    }

    $_SESSION['_flash'][$type] = $message;
}

function flash_get(string $type): string
{
    if (empty($_SESSION['_flash'][$type])) {
        return '';
    }

    $msg = (string) $_SESSION['_flash'][$type];
    unset($_SESSION['_flash'][$type]);

    return $msg;
}

function upload_image(string $field, string $uploadDir = 'uploads'): ?string
{
    if (empty($_FILES[$field]) || !isset($_FILES[$field]['tmp_name'])) {
        return null;
    }

    if ((int) $_FILES[$field]['error'] !== UPLOAD_ERR_OK) {
        return null;
    }

    $tmp = (string) $_FILES[$field]['tmp_name'];
    $size = (int) $_FILES[$field]['size'];

    if ($size <= 0 || $size > 3 * 1024 * 1024) {
        return null;
    }

    $info = @getimagesize($tmp);
    if ($info === false) {
        return null;
    }

    $mime = (string) ($info['mime'] ?? '');
    $ext = '';
    if ($mime === 'image/jpeg') {
        $ext = 'jpg';
    } elseif ($mime === 'image/png') {
        $ext = 'png';
    } elseif ($mime === 'image/webp') {
        $ext = 'webp';
    } else {
        return null;
    }

    if (!is_dir($uploadDir)) {
        @mkdir($uploadDir, 0777, true);
    }

    $name = bin2hex(random_bytes(16)) . '.' . $ext;
    $path = rtrim($uploadDir, '/\\') . '/' . $name;

    if (!move_uploaded_file($tmp, $path)) {
        return null;
    }

    return $path;
}
