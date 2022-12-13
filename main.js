const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

const filmsWrapper = document.querySelector('.films');
const loaderWrapper = document.querySelector('.loader-wrapper');
const btnShowMore = document.querySelector('.show-more');

fetch(url, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f00182066dmshb169e57e1712abdp1fe53ajsn0a4e78cbd9d4',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Убираем loader
        loaderWrapper.remove();
        // Вырезаем первые 20 фильмов
        const films = data.splice(0, 20);
        // Отображаем фильмы
        renderFilms(films);

        btnShowMore.onclick = function () {
            const films = data.splice(0, 20);
            renderFilms(films);
            if (data.length === 0) btnShowMore.remove()
        };

    });

function renderFilms(films) {
    for (film of films) {
        const html = `<div class="film-card">
                            <img src=${film.image} alt="Обложка" class="film-card__img">
                            <h3 class="film-card__title">${film.title}</h3>
                            <div class="film-card__year">${film.year}</div>
                            <div class="film-card__rate">IMDB: ${film.rating}</div>
                        </div>`;
        filmsWrapper.insertAdjacentHTML('beforeend', html);
    }
}




