<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

define('UPLOAD_SECRET', 'adesco-ranch-upload-2024');
define('GALLERY_DIR',   __DIR__ . '/assets/img/gallery/');
define('MANIFEST_FILE', __DIR__ . '/gallery-manifest.json');

$IMAGE_EXTS = ['jpg','jpeg','png','webp','gif','avif','bmp'];

$data     = json_decode(file_get_contents('php://input'), true) ?? [];
$secret   = $data['secret']   ?? '';
$filename = $data['filename'] ?? '';

/* ── Auth ── */
if ($secret !== UPLOAD_SECRET) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

/* ── Validate filename ── */
if (!$filename || strpos($filename, '/') !== false || strpos($filename, '..') !== false) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid filename']);
    exit;
}

$path = GALLERY_DIR . $filename;
if (!file_exists($path)) {
    http_response_code(404);
    echo json_encode(['error' => 'File not found']);
    exit;
}

/* ── Delete & regenerate ── */
if (unlink($path)) {
    $items = [];
    foreach (scandir(GALLERY_DIR) as $f) {
        if ($f === '.' || $f === '..') continue;
        if (!in_array(strtolower(pathinfo($f, PATHINFO_EXTENSION)), $IMAGE_EXTS)) continue;
        $title = ucwords(str_replace(['-','_'], ' ', pathinfo($f, PATHINFO_FILENAME)));
        $items[] = ['src' => '/assets/img/gallery/' . $f, 'title' => $title];
    }
    file_put_contents(MANIFEST_FILE, json_encode(['images' => $items], JSON_PRETTY_PRINT));
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Delete failed']);
}
