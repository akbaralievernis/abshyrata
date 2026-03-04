<?php
require __DIR__ . '/bootstrap.php';

$error = '';
$ok = '';
$fullName = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_validate($_POST['_csrf'] ?? '')) {
        $error = 'CSRF ошибка. Обновите страницу.';
    } else {
        $fullName = trim((string) ($_POST['full_name'] ?? ''));
        $email = trim((string) ($_POST['email'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');

        if ($fullName === '' || $email === '' || $password === '') {
            $error = 'Заполните все поля.';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = 'Неверный email.';
        } elseif (mb_strlen($password, 'UTF-8') < 6) {
            $error = 'Пароль минимум 6 символов.';
        } else {
            $pdo = db();
            $check = $pdo->prepare('SELECT id FROM users WHERE email = :email LIMIT 1');
            $check->execute(['email' => $email]);

            if ($check->fetch()) {
                $error = 'Email уже зарегистрирован.';
            } else {
                $hash = password_hash($password, PASSWORD_DEFAULT);

                $pdo->beginTransaction();
                try {
                    $ins = $pdo->prepare(
                        'INSERT INTO users (full_name, email, password_hash, role)
                         VALUES (:full_name, :email, :password_hash, "student")'
                    );
                    $ins->execute([
                        'full_name' => $fullName,
                        'email' => $email,
                        'password_hash' => $hash,
                    ]);

                    $uid = (int) $pdo->lastInsertId();

                    $ins2 = $pdo->prepare(
                        'INSERT INTO student_profiles (user_id, bio, skills, is_email_public)
                         VALUES (:uid, :bio, :skills, 0)'
                    );
                    $ins2->execute([
                        'uid' => $uid,
                        'bio' => 'Новый студент.',
                        'skills' => '',
                    ]);

                    $pdo->commit();
                    $ok = 'Регистрация успешна. Теперь войдите.';
                } catch (Exception $e) {
                    $pdo->rollBack();
                    $error = 'Ошибка регистрации.';
                }
            }
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
<div class="container narrow">
  <div class="card">
    <h2>Регистрация</h2>
    <?php if ($error !== ''): ?><div class="msg error"><?= e($error) ?></div><?php endif; ?>
    <?php if ($ok !== ''): ?><div class="msg ok"><?= e($ok) ?></div><?php endif; ?>

    <form method="post">
      <input type="hidden" name="_csrf" value="<?= e(csrf_token()) ?>">
      <label>ФИО</label>
      <input name="full_name" value="<?= e($fullName) ?>" required>
      <label>Email</label>
      <input type="email" name="email" value="<?= e($email) ?>" required>
      <label>Пароль</label>
      <input type="password" name="password" required>
      <button class="btn w100" type="submit">Зарегистрироваться</button>
    </form>

    <p class="muted"><a href="login.php">Уже есть аккаунт? Войти</a></p>
    <p class="muted"><a href="index.php">На главную</a></p>
  </div>
</div>
</body>
</html>
