<?php
require __DIR__ . '/bootstrap.php';

if (isLoggedIn()) {
    redirect('students.php');
}

$error = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_validate($_POST['_csrf'] ?? '')) {
        $error = 'CSRF ошибка. Обновите страницу.';
    } else {
        $email = trim((string) ($_POST['email'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');

        $stmt = db()->prepare('SELECT id, password_hash FROM users WHERE email = :email LIMIT 1');
        $stmt->execute(['email' => $email]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($password, (string) $user['password_hash'])) {
            $error = 'Неверный email или пароль.';
        } else {
            session_regenerate_id(true);
            $_SESSION['user_id'] = (int) $user['id'];
            redirect('students.php');
        }
    }
}
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Вход</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container narrow">
  <div class="card">
    <h2>Вход</h2>
    <?php if ($error !== ''): ?><div class="msg error"><?= e($error) ?></div><?php endif; ?>
    <?php $flash = flash_get('error'); if ($flash !== ''): ?><div class="msg error"><?= e($flash) ?></div><?php endif; ?>

    <form method="post">
      <input type="hidden" name="_csrf" value="<?= e(csrf_token()) ?>">
      <label>Email</label>
      <input type="email" name="email" value="<?= e($email) ?>" required>
      <label>Пароль</label>
      <input type="password" name="password" required>
      <button class="btn w100" type="submit">Войти</button>
    </form>

    <p class="muted"><a href="register.php">Нет аккаунта? Регистрация</a></p>
    <p class="muted"><a href="index.php">На главную</a></p>
  </div>
</div>
</body>
</html>
