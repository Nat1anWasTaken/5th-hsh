// 遊戲設定
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

// 遊戲狀態
let score = 0;
let gameRunning = true;

// 重力和物理設定
const GRAVITY = 0.8;
const JUMP_FORCE = -15;
const GROUND_Y = canvas.height - 100;

// 玩家物件
const player = {
    x: 100,
    y: GROUND_Y,
    width: 50,
    height: 50,
    velocityX: 0,
    velocityY: 0,
    speed: 5,
    onGround: true,
    image: null
};

// 遊戲物件陣列
let coins = [];
let obstacles = [];
let platforms = [];

// 載入玩家圖片
const playerImg = new Image();
playerImg.src = 'assets/player.png';
playerImg.onload = function () {
    player.image = playerImg;
};

// 載入背景圖片
const backgroundImg = new Image();
backgroundImg.src = 'assets/background.png';

// 按鍵狀態
const keys = {
    left: false,
    right: false,
    space: false
};

// 事件監聽器
document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowLeft':
            keys.left = true;
            e.preventDefault();
            break;
        case 'ArrowRight':
            keys.right = true;
            e.preventDefault();
            break;
        case 'Space':
            keys.space = true;
            e.preventDefault();
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'ArrowLeft':
            keys.left = false;
            break;
        case 'ArrowRight':
            keys.right = false;
            break;
        case 'Space':
            keys.space = false;
            break;
    }
});

// 初始化遊戲物件
function initGame() {
    // 建立平台
    platforms = [
        { x: 0, y: GROUND_Y + 50, width: canvas.width, height: 50 }, // 地面
        { x: 300, y: GROUND_Y - 100, width: 200, height: 20 },
        { x: 600, y: GROUND_Y - 200, width: 150, height: 20 }
    ];

    // 建立金幣
    coins = [
        { x: 350, y: GROUND_Y - 130, width: 30, height: 30, collected: false },
        { x: 650, y: GROUND_Y - 230, width: 30, height: 30, collected: false },
        { x: 200, y: GROUND_Y - 30, width: 30, height: 30, collected: false },
        { x: 500, y: GROUND_Y - 30, width: 30, height: 30, collected: false }
    ];

    // 建立障礙物
    obstacles = [
        { x: 400, y: GROUND_Y - 30, width: 30, height: 30 },
        { x: 700, y: GROUND_Y - 30, width: 30, height: 30 }
    ];
}

// 更新玩家
function updatePlayer() {
    // 水平移動
    if (keys.left) {
        player.velocityX = -player.speed;
    } else if (keys.right) {
        player.velocityX = player.speed;
    } else {
        player.velocityX *= 0.8; // 摩擦力
    }

    // 跳躍
    if (keys.space && player.onGround) {
        player.velocityY = JUMP_FORCE;
        player.onGround = false;
    }

    // 應用重力
    if (!player.onGround) {
        player.velocityY += GRAVITY;
    }

    // 更新位置
    player.x += player.velocityX;
    player.y += player.velocityY;

    // 邊界檢查
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

    // 平台碰撞檢測
    player.onGround = false;
    for (let platform of platforms) {
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y + player.height > platform.y &&
            player.y + player.height < platform.y + platform.height + 10 &&
            player.velocityY >= 0) {

            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.onGround = true;
        }
    }
}

// 檢查碰撞
function checkCollisions() {
    // 金幣碰撞
    for (let coin of coins) {
        if (!coin.collected &&
            player.x < coin.x + coin.width &&
            player.x + player.width > coin.x &&
            player.y < coin.y + coin.height &&
            player.y + player.height > coin.y) {

            coin.collected = true;
            score += 100;
            scoreElement.textContent = `分數: ${score}`;
        }
    }

    // 障礙物碰撞
    for (let obstacle of obstacles) {
        if (player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y) {

            // 重置玩家位置
            player.x = 100;
            player.y = GROUND_Y;
            player.velocityX = 0;
            player.velocityY = 0;
            score = Math.max(0, score - 50);
            scoreElement.textContent = `分數: ${score}`;
        }
    }
}

// 繪製遊戲
function draw() {
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製背景
    if (backgroundImg.complete) {
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    } else {
        // 漸層背景
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(1, '#98FB98');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 繪製平台
    ctx.fillStyle = '#8B4513';
    for (let platform of platforms) {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

        // 平台邊框
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 2;
        ctx.strokeRect(platform.x, platform.y, platform.width, platform.height);
    }

    // 繪製金幣
    for (let coin of coins) {
        if (!coin.collected) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(coin.x + coin.width / 2, coin.y + coin.height / 2, coin.width / 2, 0, Math.PI * 2);
            ctx.fill();

            // 金幣光澤效果
            ctx.fillStyle = '#FFF8DC';
            ctx.beginPath();
            ctx.arc(coin.x + coin.width / 2 - 5, coin.y + coin.height / 2 - 5, coin.width / 4, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 繪製障礙物
    ctx.fillStyle = '#FF4500';
    for (let obstacle of obstacles) {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // 障礙物邊框
        ctx.strokeStyle = '#DC143C';
        ctx.lineWidth = 2;
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

    // 繪製玩家
    if (player.image && player.image.complete) {
        ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
    } else {
        // 備用矩形
        ctx.fillStyle = '#FF6B35';
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // 玩家邊框
        ctx.strokeStyle = '#FF4500';
        ctx.lineWidth = 2;
        ctx.strokeRect(player.x, player.y, player.width, player.height);
    }

    // 繪製雲朵裝飾
    drawClouds();
}

// 繪製雲朵
function drawClouds() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    // 雲朵 1
    ctx.beginPath();
    ctx.arc(150, 80, 30, 0, Math.PI * 2);
    ctx.arc(180, 80, 40, 0, Math.PI * 2);
    ctx.arc(210, 80, 30, 0, Math.PI * 2);
    ctx.fill();

    // 雲朵 2
    ctx.beginPath();
    ctx.arc(500, 120, 25, 0, Math.PI * 2);
    ctx.arc(525, 120, 35, 0, Math.PI * 2);
    ctx.arc(550, 120, 25, 0, Math.PI * 2);
    ctx.fill();

    // 雲朵 3
    ctx.beginPath();
    ctx.arc(650, 60, 20, 0, Math.PI * 2);
    ctx.arc(670, 60, 30, 0, Math.PI * 2);
    ctx.arc(690, 60, 20, 0, Math.PI * 2);
    ctx.fill();
}

// 遊戲主循環
function gameLoop() {
    if (gameRunning) {
        updatePlayer();
        checkCollisions();
        draw();
        requestAnimationFrame(gameLoop);
    }
}

// 初始化並開始遊戲
initGame();
gameLoop();

// 顯示遊戲說明
console.log('🍄 瑪利歐遊戲已載入！');
console.log('使用方向鍵移動，空白鍵跳躍');
console.log('收集金幣獲得分數，避開紅色障礙物！'); 