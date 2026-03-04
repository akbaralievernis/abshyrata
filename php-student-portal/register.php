<?php
require __DIR__ . '/db.php';
require __DIR__ . '/auth.php';

$error = '';
$ok = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = trim($_POST['full_name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = (string) ($_POST['password'] ?? '');

    if ($fullName === '' || $email === '' || $password === '') {
        $error = 'Заполните все поля.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Неверный email.';
    } elseif (mb_strlen($password) < 6) {
        $error = 'Пароль должен быть минимум 6 символов.';
    } else {
        $check = $pdo->prepare('SELECT id FROM users WHERE email = :email LIMIT 1');
        $check->execute(['email' => $email]);

        if ($check->fetch()) {
            $error = 'Пользователь с таким email уже существует.';
        } else {
            $hash = password_hash($password, PASSWORD_DEFAULT);

            $insertUser = $pdo->prepare(
                'INSERT INTO users (full_name, email, password_hash, role) VALUES (:full_name, :email, :password_hash, :role)'
            );
            $insertUser->execute([
                'full_name' => $fullName,
                'email' => $email,
                'password_hash' => $hash,
                'role' => 'student',
            ]);

            $userId = (int) $pdo->lastInsertId();

            $insertStudent = $pdo->prepare(
                'INSERT INTO student_profiles (user_id, bio, skills, is_email_public) VALUES (:user_id, :bio, :skills, :is_email_public)'
            );
            $insertStudent->execute([
                'user_id' => $userId,
                'bio' => 'Новый студент на портале.',
                'skills' => '',
                'is_email_public' => 0,
            ]);

            $ok = 'Регистрация успешна. Теперь войдите в систему.';
        }
    }
}
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Регистрация</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <h2>Регистрация студента</h2>
    <?php if ($error !== ''): ?><div class="msg error"><?= htmlspecialchars($error) ?></div><?php endif; ?>
    <?php if ($ok !== ''): ?><div class="msg ok"><?= htmlspecialchars($ok) ?></div><?php endif; ?>
    <form method="post">
      <label>ФИО</label>
      <input name="full_name" required>
      <label>Email</label>
      <input type="email" name="email" required>
      <label>Пароль</label>
      <input type="password" name="password" required>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p><a href="login.php">Уже есть аккаунт? Войти</a></p>
  </div>
</div>
</body>
</html>
