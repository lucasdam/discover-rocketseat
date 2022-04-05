import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const div = document.querySelector('.title')
document.querySelector('#find-movie-button').addEventListener('click', findMovie)

function getData(movieId) {
    return fetch(BASE_URL + movieId + '?' + API_KEY + '&' + language)
        .then(response => response.json())
        .then(data => data)
}

async function findMovie() {
    const movieId = parseInt(Math.random() * 1000)
    const movie = await getData(movieId)

    movie.title == undefined || movie.overview == '' ? findMovie() : showMovie(movie)
}

function showMovie(movie) {
    const movieGenres = []
    const movieContent = document.querySelector('.movie-content')
    movieContent && movieContent.parentNode.removeChild(movieContent)
    
    movie.genres.forEach(genre => {
        movieGenres.push(' ' + genre.name)
    });

    div.insertAdjacentHTML('afterend', `
        <div class="movie-content">
            <div>
                <img class="movie-poster" src="${IMG_URL + movie.poster_path}" alt="Poster do filme">
                <p class="movie-infos">Duração: ${movie.runtime} min</p>
                <p class="movie-infos">Gênero:${movieGenres}</p>
            </div>

            <div class="content-text">
                <h3 class="movie-name">${movie.title}</h3>
                <p class="movie-description">${movie.overview}</p>
            </div>
        </div>
    `)
}