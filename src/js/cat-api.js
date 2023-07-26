const selectBreed = document.querySelector('select.breed-select');
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';

let storedBreeds = [];

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
      //console.log(data);
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
      console.log(error);
    });
}
