<?php
require __DIR__ . '/bootstrap.php';
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title><?= e(APP_NAME) ?></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <h1><?= e(APP_NAME) ?></h1>
    <p class="muted">Главное меню: информация о группе и доступ к списку студентов после входа.</p>

    <div class="panel">
      <h3>Информация о группе</h3>
      <ul>
        <li><b>Университет:</b> ОшГУ</li>
        <li><b>Факультет:</b> АУБ</li>
        <li><b>Курс:</b> 1</li>
        <li><b>Группа:</b> 1-24</li>
      </ul>
    </div>

    <div class="nav">
      <?php if (isLoggedIn()): ?>
        <a class="btn" href="students.php">Студенты</a>
        <a class="btn ghost" href="dashboard.php">Мой кабинет</a>
        <a class="btn danger" href="logout.php">Выйти</a>
      <?php else: ?>
        <a class="btn" href="login.php">Войти</a>
        <a class="btn ghost" href="register.php">Регистрация</a>
      <?php endif; ?>
    </div>
  </div>
</div>
</body>
</html>
