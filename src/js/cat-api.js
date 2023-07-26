const selectBreed = document.querySelector('select.breed-select');
const loaderIndicator = document.querySelector('.loader');
const errorIndicator = document.querySelector('.error');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';

let storedBreeds = [];

loaderIndicator.style.fontWeight = 'bold';
loaderIndicator.textContent = 'Loading data, please wait...';
errorIndicator.textContent = '';
selectBreed.style.display = 'none';
// selectBreed.classList.add('is-hidden');
// errorIndicator.classList.add('is-hidden');

export function fetchBreeds() {
  //console.log(BASE_URL);
  //console.log(API_KEY);
  //console.log(selectBreed);

  fetch(BASE_URL, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      //console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      selectBreed.style.display = 'block';
      //selectBreed.classList.remove('is-hidden');
      //console.log(data);
      loaderIndicator.textContent = '';
      loaderIndicator.style.display = 'none';
      //loaderIndicator.classList.add('is-hidden');
      storedBreeds = data;
      //console.log('storedBreeds', storedBreeds);
      let markup = null;
      markup = storedBreeds
        .map(breed => {
          //console.log(breed.id, breed.name)
          return `<option value="${breed.id}">${breed.name}</option>`;
        })
        .join('');
      selectBreed.innerHTML = markup;
      //console.log(markup);

      //   for (let i = 0; i < storedBreeds.length; i+=1) {
      //     const breed = storedBreeds[i];
      //     let option = document.createElement('option');
      //     //skip any breeds that don't have an image
      //     if (!breed.image) continue;

      //     //use the current array index
      //     option.value = breed.id;
      //     option.innerHTML = `${breed.name}`;
      //       selectBreed.appendChild(option);
      //     }
    })
    .catch(function (error) {
      loaderIndicator.style.display = 'none';
      errorIndicator.style.color = 'red';
      errorIndicator.style.fontWeight = 'bold';
      errorIndicator.textContent =
        'Oops!! Something went wrong! Try reloading the page!';
      //errorIndicator.classList.remove('is-hidden');
      //loaderIndicator.classList.add('is-hidden');
      console.log(error);
    });
}
