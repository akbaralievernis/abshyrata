<?php
require __DIR__ . '/auth.php';
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Студенческий портал</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <h1>Студенческий портал (PHP + MySQL)</h1>
    <p>Платформа для студентов: регистрация, вход, личный кабинет и список студентов.</p>
    <div class="nav">
      <?php if (isLoggedIn()): ?>
        <a href="dashboard.php">Кабинет</a>
        <a href="students.php">Студенты</a>
        <a href="logout.php">Выйти</a>
      <?php else: ?>
        <a href="register.php">Регистрация</a>
        <a href="login.php">Вход</a>
      <?php endif; ?>
    </div>
  </div>
</div>
</body>
</html>
