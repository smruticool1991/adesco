<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

define('UPLOAD_SECRET', 'adesco-ranch-upload-2024');
define('GALLERY_DIR',   __DIR__ . '/assets/img/gallery/');
define('MANIFEST_FILE', __DIR__ . '/gallery-manifest.json');

$ALLOWED_TYPES = ['image/jpeg','image/png','image/webp','image/gif','image/avif','image/bmp'];
$IMAGE_EXTS    = ['jpg','jpeg','png','webp','gif','avif','bmp'];

/* ── Auth ── */
$secret = $_POST['secret'] ?? '';
if ($secret !== UPLOAD_SECRET) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

/* ── Upload files ── */
$uploaded = [];

if (!empty($_FILES['files'])) {
    $files = $_FILES['files'];
    $count = is_array($files['name']) ? count($files['name']) : 1;

    for ($i = 0; $i < $count; $i++) {
        $name  = is_array($files['name'])     ? $files['name'][$i]     : $files['name'];
        $type  = is_array($files['type'])     ? $files['type'][$i]     : $files['type'];
        $tmp   = is_array($files['tmp_name']) ? $files['tmp_name'][$i] : $files['tmp_name'];
        $error = is_array($files['error'])    ? $files['error'][$i]    : $files['error'];

        if ($error !== UPLOAD_ERR_OK)       continue;
        if (!in_array($type, $ALLOWED_TYPES)) continue;

        $safe = strtolower(preg_replace('/[^a-zA-Z0-9._-]/', '_', $name));
        if (move_uploaded_file($tmp, GALLERY_DIR . $safe)) {
            $uploaded[] = $safe;
        }
    }
}

/* ── Regenerate manifest ── */
regenerate_manifest($IMAGE_EXTS);

echo json_encode(['uploaded' => $uploaded]);

/* ── Helper ── */
function regenerate_manifest(array $exts) {
    $items = [];
    foreach (scandir(GALLERY_DIR) as $f) {
        if ($f === '.' || $f === '..') continue;
        if (!in_array(strtolower(pathinfo($f, PATHINFO_EXTENSION)), $exts)) continue;
        $title = ucwords(str_replace(['-','_'], ' ', pathinfo($f, PATHINFO_FILENAME)));
        $items[] = ['src' => '/assets/img/gallery/' . $f, 'title' => $title];
    }
    file_put_contents(MANIFEST_FILE, json_encode(['images' => $items], JSON_PRETTY_PRINT));
}
