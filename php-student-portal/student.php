<?php
require __DIR__ . '/bootstrap.php';
requireAuth();

$id = (int) ($_GET['id'] ?? 0);
if ($id <= 0) {
    redirect('students.php');
}

$pdo = db();
$stmt = $pdo->prepare(
    'SELECT u.id, u.full_name, u.email,
            sp.bio, sp.skills, sp.avatar_path, sp.photo_path, sp.video_url, sp.extra_text, sp.is_email_public
     FROM users u
     LEFT JOIN student_profiles sp ON sp.user_id = u.id
     WHERE u.id = :id AND u.role = "student"
     LIMIT 1'
);
$stmt->execute(['id' => $id]);
$s = $stmt->fetch();

if (!$s) {
    flash_set('error', 'Студент не найден.');
    redirect('students.php');
}

function render_video($url): string
{
    $u = trim((string) $url);
    if ($u === '') {
        return '';
    }

    if (strpos($u, 'youtube.com') !== false || strpos($u, 'youtu.be') !== false) {
        $vid = '';
        if (strpos($u, 'youtu.be/') !== false) {
            $parts = explode('youtu.be/', $u);
            $vid = $parts[1] ?? '';
        } elseif (strpos($u, 'v=') !== false) {
            $parts = explode('v=', $u);
            $vid = $parts[1] ?? '';
        }

        $vid = preg_replace('~[^a-zA-Z0-9_-].*$~', '', $vid);
        if ($vid !== '') {
            return '<div class="videoWrap"><iframe src="https://www.youtube.com/embed/' . e($vid) . '" frameborder="0" allowfullscreen></iframe></div>';
        }
    }

    $lower = strtolower($u);
    if (substr($lower, -4) === '.mp4' || substr($lower, -5) === '.webm') {
        return '<video class="videoTag" controls src="' . e($u) . '"></video>';
    }

    return '<div class="muted">Видео: <a href="' . e($u) . '" target="_blank" rel="noopener noreferrer">' . e($u) . '</a></div>';
}
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title><?= e($s['full_name']) ?></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <div class="topline">
      <h2>Профиль студента</h2>
      <div class="nav">
        <a class="btn ghost" href="students.php">Назад</a>
        <a class="btn ghost" href="dashboard.php">Мой кабинет</a>
      </div>
    </div>

    <div class="profileRow">
      <div class="avatarBox">
        <?php if (!empty($s['avatar_path'])): ?>
          <img class="avatarImg" src="<?= e($s['avatar_path']) ?>" alt="avatar">
        <?php else: ?>
          <div class="avatarPlaceholder">Нет аватара</div>
        <?php endif; ?>
      </div>
      <div>
        <h3 style="margin:0"><?= e($s['full_name']) ?></h3>
        <div class="muted"><?= !empty($s['is_email_public']) ? e($s['email']) : 'Email скрыт' ?></div>
      </div>
    </div>

    <hr>

    <h3>О себе</h3>
    <div><?= nl2br(e($s['bio'] ?? '')) ?></div>

    <h3>Навыки</h3>
    <div class="muted"><?= e($s['skills'] ?? '') ?></div>

    <?php if (!empty($s['photo_path'])): ?>
      <h3>Фото</h3>
      <img class="bigPhoto" src="<?= e($s['photo_path']) ?>" alt="photo">
    <?php endif; ?>

    <?php if (!empty($s['video_url'])): ?>
      <h3>Видео</h3>
      <?= render_video((string) $s['video_url']) ?>
    <?php endif; ?>

    <?php if (!empty($s['extra_text'])): ?>
      <h3>Доп. данные</h3>
      <div><?= nl2br(e($s['extra_text'])) ?></div>
    <?php endif; ?>

  </div>
</div>
</body>
</html>
