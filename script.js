let currentIndex = 0;

function moveSlide(direction) {
    const container = document.getElementById("movie-container");
    const totalMovies = container.children.length;
    currentIndex = (currentIndex + direction + totalMovies) % totalMovies;
    const offset = -currentIndex * 220; // 220px is the width of each image with margin

    container.style.transform = `translateX(${offset}px)`;
}

// Example of a simple movie interaction, like hover effects
const movieImages = document.querySelectorAll('.movie-container img');

movieImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = "scale(1.1)";
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = "scale(1)";
    });
});

document.getElementById('play-btn').addEventListener('click', function() {
    let iframe = document.getElementById('featured-video');
    iframe.src = iframe.src; // This refreshes the video to play again
});
