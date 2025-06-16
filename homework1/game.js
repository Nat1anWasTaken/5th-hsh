// Get canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game assets
const assets = {
    player: null,
    background: null
};

// Game state
const gameState = {
    player: {
        x: canvas.width / 2,
        y: canvas.height - 100,
        width: 50,
        height: 50,
        speed: 5
    },
    keys: {
        ArrowLeft: false,
        ArrowRight: false,
        ArrowUp: false,
        ArrowDown: false
    }
};

// Load game assets
function loadAssets() {
    // Create player image
    assets.player = new Image();
    assets.player.src = 'assets/player.png';
    
    // Create background image
    assets.background = new Image();
    assets.background.src = 'assets/background.png';
}

// Handle keyboard input
window.addEventListener('keydown', (e) => {
    if (gameState.keys.hasOwnProperty(e.key)) {
        gameState.keys[e.key] = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (gameState.keys.hasOwnProperty(e.key)) {
        gameState.keys[e.key] = false;
    }
});

// Update game state
function update() {
    // Move player based on keyboard input
    if (gameState.keys.ArrowLeft && gameState.player.x > 0) {
        gameState.player.x -= gameState.player.speed;
    }
    if (gameState.keys.ArrowRight && gameState.player.x < canvas.width - gameState.player.width) {
        gameState.player.x += gameState.player.speed;
    }
    if (gameState.keys.ArrowUp && gameState.player.y > 0) {
        gameState.player.y -= gameState.player.speed;
    }
    if (gameState.keys.ArrowDown && gameState.player.y < canvas.height - gameState.player.height) {
        gameState.player.y += gameState.player.speed;
    }
}

// Draw game
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background if loaded
    if (assets.background && assets.background.complete) {
        ctx.drawImage(assets.background, 0, 0, canvas.width, canvas.height);
    }

    // Draw player if loaded
    if (assets.player && assets.player.complete) {
        ctx.drawImage(
            assets.player,
            gameState.player.x,
            gameState.player.y,
            gameState.player.width,
            gameState.player.height
        );
    } else {
        // Draw placeholder rectangle if image not loaded
        ctx.fillStyle = 'red';
        ctx.fillRect(
            gameState.player.x,
            gameState.player.y,
            gameState.player.width,
            gameState.player.height
        );
    }
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Create assets directory and placeholder images
function createAssets() {
    // This function would create the assets directory and placeholder images
    // You'll need to add actual game assets (player.png, background.png) in the assets folder
}

// Start the game
loadAssets();
gameLoop(); 