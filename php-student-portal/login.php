<?php
require __DIR__ . '/db.php';
require __DIR__ . '/auth.php';

if (isLoggedIn()) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = (string) ($_POST['password'] ?? '');

    $stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = :email LIMIT 1');
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        $error = 'Неверные данные для входа.';
    } else {
        $_SESSION['user_id'] = (int) $user['id'];
        header('Location: dashboard.php');
        exit;
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
<div class="container">
  <div class="card">
    <h2>Вход</h2>
    <?php if ($error !== ''): ?><div class="msg error"><?= htmlspecialchars($error) ?></div><?php endif; ?>
    <form method="post">
      <label>Email</label>
      <input type="email" name="email" required>
      <label>Пароль</label>
      <input type="password" name="password" required>
      <button type="submit">Войти</button>
    </form>
    <p><a href="register.php">Нет аккаунта? Регистрация</a></p>
  </div>
</div>
</body>
</html>
