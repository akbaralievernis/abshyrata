<?php
declare(strict_types=1);

function isLoggedIn(): bool
{
    return !empty($_SESSION['user_id']);
}

function requireAuth(): void
{
    if (!isLoggedIn()) {
        flash_set('error', 'Сначала войдите в аккаунт.');
        redirect('login.php');
    }
}

function currentUserId()
{
    return isset($_SESSION['user_id']) ? (int) $_SESSION['user_id'] : null;
}
