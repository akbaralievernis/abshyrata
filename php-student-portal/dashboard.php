<?php
require __DIR__ . '/bootstrap.php';
requireAuth();

$pdo = db();
$userId = (int) currentUserId();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_validate($_POST['_csrf'] ?? '')) {
        flash_set('error', 'CSRF ошибка.');
        redirect('dashboard.php');
    }

    $bio = trim((string) ($_POST['bio'] ?? ''));
    $skills = trim((string) ($_POST['skills'] ?? ''));
    $videoUrl = trim((string) ($_POST['video_url'] ?? ''));
    $extraText = trim((string) ($_POST['extra_text'] ?? ''));
    $isPublic = isset($_POST['is_email_public']) ? 1 : 0;

    $avatar = upload_image('avatar', __DIR__ . '/uploads');
    $photo = upload_image('photo', __DIR__ . '/uploads');

    if ($avatar !== null) {
        $avatar = 'uploads/' . basename($avatar);
    }
    if ($photo !== null) {
        $photo = 'uploads/' . basename($photo);
    }

    $sql = 'UPDATE student_profiles
            SET bio = :bio, skills = :skills, video_url = :video, extra_text = :extra, is_email_public = :pub';
    $params = [
        'bio' => $bio,
        'skills' => $skills,
        'video' => $videoUrl,
        'extra' => $extraText,
        'pub' => $isPublic,
        'uid' => $userId,
    ];

    if ($avatar) {
        $sql .= ', avatar_path = :avatar';
        $params['avatar'] = $avatar;
    }

    if ($photo) {
        $sql .= ', photo_path = :photo';
        $params['photo'] = $photo;
    }

    $sql .= ' WHERE user_id = :uid';

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    flash_set('ok', 'Профиль обновлён.');
    redirect('dashboard.php');
}

$stmt = $pdo->prepare(
    'SELECT u.full_name, u.email,
            sp.bio, sp.skills, sp.avatar_path, sp.photo_path, sp.video_url, sp.extra_text, sp.is_email_public
     FROM users u
     LEFT JOIN student_profiles sp ON sp.user_id = u.id
     WHERE u.id = :id LIMIT 1'
);
$stmt->execute(['id' => $userId]);
$user = $stmt->fetch();

$ok = flash_get('ok');
$err = flash_get('error');
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Мой кабинет</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="card">
    <div class="topline">
      <h2>Мой кабинет</h2>
      <div class="nav">
        <a class="btn ghost" href="students.php">Студенты</a>
        <a class="btn danger" href="logout.php">Выйти</a>
      </div>
    </div>

    <?php if ($ok !== ''): ?><div class="msg ok"><?= e($ok) ?></div><?php endif; ?>
    <?php if ($err !== ''): ?><div class="msg error"><?= e($err) ?></div><?php endif; ?>

    <div class="profileRow">
      <div class="avatarBox">
        <?php if (!empty($user['avatar_path'])): ?>
          <img class="avatarImg" src="<?= e($user['avatar_path']) ?>" alt="avatar">
        <?php else: ?>
          <div class="avatarPlaceholder">Нет аватара</div>
        <?php endif; ?>
      </div>
      <div>
        <div><b>ФИО:</b> <?= e($user['full_name'] ?? '') ?></div>
        <div><b>Email:</b> <?= e($user['email'] ?? '') ?></div>
        <div class="muted">Страница профиля доступна из списка студентов.</div>
      </div>
    </div>

    <hr>

    <h3>Редактирование профиля</h3>
    <form method="post" enctype="multipart/form-data">
      <input type="hidden" name="_csrf" value="<?= e(csrf_token()) ?>">

      <label>О себе</label>
      <textarea name="bio" rows="4"><?= e($user['bio'] ?? '') ?></textarea>

      <label>Навыки (через запятую)</label>
      <input name="skills" value="<?= e($user['skills'] ?? '') ?>">

      <label>Видео (YouTube ссылка или .mp4)</label>
      <input name="video_url" value="<?= e($user['video_url'] ?? '') ?>" placeholder="https://youtu.be/... или https://site/video.mp4">

      <label>Доп. данные (текст)</label>
      <textarea name="extra_text" rows="4"><?= e($user['extra_text'] ?? '') ?></textarea>

      <label class="check">
        <input type="checkbox" name="is_email_public" <?= !empty($user['is_email_public']) ? 'checked' : '' ?>>
        <span>Показывать email в списке студентов</span>
      </label>

      <div class="grid2">
        <div>
          <label>Аватар (jpg/png/webp)</label>
          <input type="file" name="avatar" accept="image/*">
        </div>
        <div>
          <label>Фото (jpg/png/webp)</label>
          <input type="file" name="photo" accept="image/*">
        </div>
      </div>

      <button class="btn w100" type="submit">Сохранить</button>
    </form>
  </div>
</div>
</body>
</html>
