import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const url = BASE_URL + 'discover/movie?' + API_KEY + '&' + language
const div = document.querySelector('.title')

document.querySelector('#find-movie-button').addEventListener('click', findMovie)

async function getData(randomNumber) {
    return await fetch(url)
        .then(response => response.json())
        .then(data => data.results[randomNumber])
}

async function findMovie() {
    const randomNumber = parseInt(Math.random() * 20)
    const movie = await getData(randomNumber)
    console.log(movie)

    const movieContent = document.querySelector('.movie-content')
    movieContent && movieContent.parentNode.removeChild(movieContent)

    div.insertAdjacentHTML('afterend', `
        <div class="movie-content">
            <img class="movie-poster" src="${IMG_URL + movie.poster_path}" alt="Poster do filme">

            <div class="content-text">
                <h3 class="movie-name">${movie.title}</h3>
                <p class="movie-description">${movie.overview}</p>
            </div>
        </div>
    `)
}