
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

        function createStars() {
            const container = document.getElementById('starsContainer');
            
            // Create twinkling stars
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(star);
            }

            // Create meteors
            for (let i = 0; i < 8; i++) {
                const meteor = document.createElement('div');
                meteor.className = 'meteor';
                meteor.style.left = Math.random() * 100 + '%';
                meteor.style.top = Math.random() * 100 + '%';
                meteor.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(meteor);
            }

            // Create shooting stars
            for (let i = 0; i < 15; i++) {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.left = Math.random() * 100 + '%';
                shootingStar.style.top = Math.random() * 100 + '%';
                shootingStar.style.animationDelay = Math.random() * 8 + 's';
                container.appendChild(shootingStar);
            }
        }

        // Initialize stars when page loads
        window.addEventListener('load', createStars);