<?php
require __DIR__ . '/db.php';
require __DIR__ . '/auth.php';

requireAuth();

$userId = currentUserId();
$stmt = $pdo->prepare(
    'SELECT u.full_name, u.email, sp.bio, sp.skills
     FROM users u
     LEFT JOIN student_profiles sp ON sp.user_id = u.id
     WHERE u.id = :id LIMIT 1'
);
$stmt->execute(['id' => $userId]);
$user = $stmt->fetch();
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Кабинет</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <h2>Личный кабинет</h2>
    <div class="nav">
      <a href="students.php">Студенты</a>
      <a href="logout.php">Выйти</a>
    </div>
    <p><strong>ФИО:</strong> <?= htmlspecialchars($user['full_name'] ?? '') ?></p>
    <p><strong>Email:</strong> <?= htmlspecialchars($user['email'] ?? '') ?></p>
    <p><strong>О себе:</strong> <?= htmlspecialchars($user['bio'] ?? '') ?></p>
    <p><strong>Навыки:</strong> <?= htmlspecialchars($user['skills'] ?? '') ?></p>
  </div>
</div>
</body>
</html>
