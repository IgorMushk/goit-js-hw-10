import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';

axios.defaults.headers.common['x-api-key'] =
  'live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna';
//axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    //return response.json();
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      //return response.json();
      return response.data;
    });
}

// --- fetch()
// export function fetchBreeds() {
//   return fetch(`${BASE_URL}/breeds`, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }
