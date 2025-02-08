document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    // Open the proposal card
    card.addEventListener("click", function () {
        card.classList.add("open");
    });

    // Move "No" button playfully
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Fireworks animation when "Yes" is clicked
    yesBtn.addEventListener("click", function () {
        launchFireworks();
    });

    function launchFireworks() {
        const canvas = document.getElementById("fireworks");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        function createParticles(x, y) {
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: x,
                    y: y,
                    size: Math.random() * 4 + 1,
                    speedX: (Math.random() - 0.5) * 8,
                    speedY: (Math.random() - 0.5) * 8,
                    color: `hsl(${Math.random() * 360}, 100%, 50%)`
                });
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                p.x += p.speedX;
                p.y += p.speedY;
                p.size *= 0.96;
                if (p.size < 0.5) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animateParticles);
        }

        canvas.addEventListener("click", function (event) {
            createParticles(event.clientX, event.clientY);
            animateParticles();
        });

        createParticles(canvas.width / 2, canvas.height / 2);
        animateParticles();
    }
});

function reconsiderChoice() {
    alert("Wait, what? This is your chance for eternal happiness! 💔");
}