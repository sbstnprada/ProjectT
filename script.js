document.addEventListener('DOMContentLoaded', function() {
    // Function to change background color
    function changeBackgroundColor() {
        const colors = ['#cdb4db', '#a2d2ff', '#ffd6a5', '#fff', '#b2f7ef', '#9381ff', '#60d394', '#fcf5c7', '#cdc1ff', '#dfffd6', '#adc178']; // Add more colors as needed
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    // Change background color automatically every 3 seconds
    setInterval(changeBackgroundColor, 3000);

    // Background music control (assuming you have these elements in your HTML)
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');

    if (playButton) {
        playButton.addEventListener('click', function() {
            audio.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'inline';
        });
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', function() {
            audio.pause();
            pauseButton.style.display = 'none';
            playButton.style.display = 'inline'; // Show play button when paused
        });
    }

    // Handle photo click to show larger version
    const photoItems = document.querySelectorAll('.photo-container img');

    photoItems.forEach(photo => {
        photo.addEventListener('click', function() {
            const src = this.src;
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const largeImg = document.createElement('img');
            largeImg.src = src;
            largeImg.classList.add('large-img');

            overlay.appendChild(largeImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });

    // Initial background color change on page load
    changeBackgroundColor();

    // Clickable parts of "I <3 YOU"
    const sections = ['i', 'heart', 'you'];
    sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.addEventListener('click', () => {
                window.location.href = `${section}-content.html`; // Navigate to respective content page
            });
        }
    });
});
