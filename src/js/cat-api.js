const selectBreed = document.querySelector('select.breed-select');
const loaderIndicator = document.querySelector('.loader');
const errorIndicator = document.querySelector('.error');
const cardBreedCat = document.querySelector('.cat-info');

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';

let storedBreeds = [];

selectBreed.classList.add('is-hidden');
errorIndicator.classList.add('is-hidden');

export function fetchBreeds() {
  fetch(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      selectBreed.classList.remove('is-hidden');
      loaderIndicator.classList.add('is-hidden');
      storedBreeds = data;

      let markup = null;
      markup = storedBreeds
        .map(breed => {
          return `<option value="${breed.id}">${breed.name}</option>`;
        })
        .join('');
      selectBreed.innerHTML = markup;
    })
    .catch(function (error) {
      errorIndicator.classList.remove('is-hidden');
      loaderIndicator.classList.add('is-hidden');
      console.log(error);
    });
}

export function fetchCatByBreed(breedId) {
  fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      selectBreed.classList.remove('is-hidden');
      loaderIndicator.classList.add('is-hidden');

      console.log(data);

      const markup = `
            <img src="${data[0].url}" alt="${data[0].breeds[0].name}" width="480" />
            <div class="cat-info-text">
                <h2>${data[0].breeds[0].name}</h2>
                <p>${data[0].breeds[0].description}</p>
                <p><span>Temperament :</span>${data[0].breeds[0].temperament}</p>
            </div>`;
      cardBreedCat.innerHTML = markup;
      console.log(markup);
    })
    .catch(function (error) {
      errorIndicator.classList.remove('is-hidden');
      loaderIndicator.classList.add('is-hidden');
      console.log(error);
    });
}
