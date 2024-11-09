document.addEventListener('DOMContentLoaded', () => {
            const overlay = document.getElementById('overlay');
            const content = document.querySelector('.html');
            const bgMusic = document.getElementById('bg-music');

            overlay.addEventListener('click', () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    content.style.display = 'flex';
                    bgMusic.play();
                }, 1000);
            });
