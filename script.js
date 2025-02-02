document.addEventListener("DOMContentLoaded", () => {
    const movies = document.querySelectorAll(".movie-container img");
    
    movies.forEach(movie => {
        movie.addEventListener("click", () => {
            alert("Movie clicked: " + movie.alt);
        });
    });
});

