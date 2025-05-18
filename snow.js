
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const shuriken = '✴️';

function createSnowflakes() {
    const x = Math.random() * canvas.width;
    const y = 0;
    const size = Math.random() * 20 + 10;
    const speed = Math.random() * 1 + 0.5;
    snowflakes.push({ x, y, size, speed });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of snowflakes) {
        ctx.font = `${s.size}px Arial`;
        ctx.fillText(shuriken, s.x, s.y);
    }
}

function moveSnowflakes() {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
        snowflakes[i].y += snowflakes[i].speed;
        if (snowflakes[i].y > canvas.height) {
            snowflakes.splice(i, 1);
        }
    }
}

function updateSnowfall() {
    createSnowflakes();
    moveSnowflakes();
    drawSnowflakes();
}

setInterval(updateSnowfall, 30);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
