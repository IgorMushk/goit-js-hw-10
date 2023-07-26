const selectBreed = document.querySelector('select.breed-select');
const loaderIndicator = document.querySelector('.loader');
const errorIndicator = document.querySelector('.error');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';

let storedBreeds = [];

selectBreed.classList.add('is-hidden');
errorIndicator.classList.add('is-hidden');

export function fetchBreeds() {
  fetch(BASE_URL, {
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
