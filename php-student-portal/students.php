<?php
require __DIR__ . '/db.php';
require __DIR__ . '/auth.php';

requireAuth();

$stmt = $pdo->query(
    'SELECT u.full_name, u.email, sp.bio, sp.skills, sp.is_email_public
     FROM users u
     LEFT JOIN student_profiles sp ON sp.user_id = u.id
     WHERE u.role = "student"
     ORDER BY u.created_at DESC'
);
$students = $stmt->fetchAll();
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Студенты</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <h2>Список студентов</h2>
    <div class="nav">
      <a href="dashboard.php">Кабинет</a>
      <a href="logout.php">Выйти</a>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>ФИО</th>
        <th>Email</th>
        <th>Навыки</th>
        <th>О себе</th>
      </tr>
      </thead>
      <tbody>
      <?php foreach ($students as $student): ?>
        <tr>
          <td><?= htmlspecialchars($student['full_name']) ?></td>
          <td><?= $student['is_email_public'] ? htmlspecialchars($student['email']) : 'Скрыт' ?></td>
          <td><?= htmlspecialchars($student['skills'] ?? '') ?></td>
          <td><?= htmlspecialchars($student['bio'] ?? '') ?></td>
        </tr>
      <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>
</body>
</html>
