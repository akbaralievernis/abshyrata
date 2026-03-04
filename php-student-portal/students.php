<?php
require __DIR__ . '/bootstrap.php';
requireAuth();

$q = trim((string) ($_GET['q'] ?? ''));
$pdo = db();

if ($q !== '') {
    $stmt = $pdo->prepare(
        'SELECT u.id, u.full_name, u.email,
                sp.skills, sp.bio, sp.avatar_path, sp.is_email_public
         FROM users u
         LEFT JOIN student_profiles sp ON sp.user_id = u.id
         WHERE u.role = "student"
           AND (u.full_name LIKE :q OR sp.skills LIKE :q OR sp.bio LIKE :q)
         ORDER BY u.created_at DESC'
    );
    $stmt->execute(['q' => '%' . $q . '%']);
} else {
    $stmt = $pdo->query(
        'SELECT u.id, u.full_name, u.email,
                sp.skills, sp.bio, sp.avatar_path, sp.is_email_public
         FROM users u
         LEFT JOIN student_profiles sp ON sp.user_id = u.id
         WHERE u.role = "student"
         ORDER BY u.created_at DESC'
    );
}

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
    <div class="topline">
      <h2>Студенты</h2>
      <div class="nav">
        <a class="btn ghost" href="index.php">Главное меню</a>
        <a class="btn ghost" href="dashboard.php">Мой кабинет</a>
        <a class="btn danger" href="logout.php">Выйти</a>
      </div>
    </div>

    <form class="search" method="get">
      <input name="q" value="<?= e($q) ?>" placeholder="Поиск: имя / навыки / био...">
      <button class="btn" type="submit">Найти</button>
      <a class="btn ghost" href="students.php">Сброс</a>
    </form>

    <div class="cards">
      <?php foreach ($students as $s): ?>
        <a class="studentCard" href="student.php?id=<?= (int) $s['id'] ?>">
          <div class="studentTop">
            <?php if (!empty($s['avatar_path'])): ?>
              <img class="smallAvatar" src="<?= e($s['avatar_path']) ?>" alt="avatar">
            <?php else: ?>
              <div class="smallAvatar placeholder"><?= e(mb_strtoupper(mb_substr((string) $s['full_name'], 0, 1, 'UTF-8'), 'UTF-8')) ?></div>
            <?php endif; ?>

            <div>
              <div class="studentName"><?= e($s['full_name']) ?></div>
              <div class="muted"><?= !empty($s['is_email_public']) ? e($s['email']) : 'Email скрыт' ?></div>
            </div>
          </div>

          <div class="muted"><?= e($s['skills'] ?? '') ?></div>
          <div class="muted"><?= e($s['bio'] ?? '') ?></div>
        </a>
      <?php endforeach; ?>

      <?php if (!$students): ?>
        <div class="muted">Ничего не найдено.</div>
      <?php endif; ?>
    </div>
  </div>
</div>
</body>
</html>
