
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflakes() {
    const x = Math.random() * canvas.width;
    const y = 0;
    const radius = Math.random() * 4 + 1;
    const speed = Math.random() * 1 + 0.5;
    snowflakes.push({ x, y, radius, speed });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function moveSnowflakes() {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > canvas.height) {
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
