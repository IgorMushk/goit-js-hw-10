import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';

const selectBreed = document.querySelector('select.breed-select');
const loaderIndicator = document.querySelector('.loader');
const errorIndicator = document.querySelector('.error');
const cardBreedCat = document.querySelector('.cat-info');
//const selectBreedCat = document.querySelector('.breed-select');

let storedBreeds = [];

selectBreed.classList.add('is-hidden');
errorIndicator.classList.add('is-hidden');

fetchBreeds()
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

//selectBreedCat.addEventListener('change', onSelectBreed);
selectBreed.addEventListener('change', onSelectBreed);

function onSelectBreed(evt) {
  //console.log(selectBread.value);
  //console.log(evt.target.value);
  loaderIndicator.classList.remove('is-hidden');
  errorIndicator.classList.add('is-hidden');
  cardBreedCat.classList.add('is-hidden');

  const breedId = evt.target.value;
  fetchCatByBreed(breedId)
    .then(data => {
      selectBreed.classList.remove('is-hidden');
      loaderIndicator.classList.add('is-hidden');

      //console.log(data);
      const markup = `
          <img src="${data[0].url}" alt="${data[0].breeds[0].name}" width="480" />
          <div class="cat-info-text">
              <h2>${data[0].breeds[0].name}</h2>
              <p>${data[0].breeds[0].description}</p>
              <p><span>Temperament :</span>${data[0].breeds[0].temperament}</p>
          </div>`;
      cardBreedCat.innerHTML = markup;
      cardBreedCat.classList.remove('is-hidden');
      //console.log(markup);
    })
    .catch(function (error) {
      errorIndicator.classList.remove('is-hidden');
      loaderIndicator.classList.add('is-hidden');
      console.log(error);
    });
}
