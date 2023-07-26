import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';

//const selectBreed = document.querySelector('select.breed-select');
//const loaderIndicator = document.querySelector('.loader');
//const errorIndicator = document.querySelector('.error');
const selectBread = document.querySelector('.breed-select');

//const BASE_URL = 'https://api.thecatapi.com/v1';
//const API_KEY =
//  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';

//let storedBreeds = [];

//selectBreed.classList.add('is-hidden');
//errorIndicator.classList.add('is-hidden');

fetchBreeds();

selectBread.addEventListener('change', onSelectBreed);

function onSelectBreed(evt) {
  //console.log(selectBread.value);
  //console.log(evt.target.value);
  const breedId = evt.target.value;
  fetchCatByBreed(breedId);
}
