'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imagesClass = document.querySelector('.images');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country
//     renderCountry(data);

//     // Get neighbour country
//     const neighbour = data.borders?.[0];

//     // AJAX call country 1
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('Nigeria');
// // getCountryData('usa');
// // getCountryData('Netherlands');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/Nigeria'
// );
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'fancepool';

//       // Country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong,  ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('Germany');
// });

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Country not found (${response.status})`);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country

//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) {
//         throw new Error('No neighbour found!');
//       }

//       // Country 2
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong,  ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('USA');
// });

//////////////////////////////////////////////////////
// Coding Challenge 1

// const whereAmI = function (lat, long) {
//   console.log('Where Am I?');
//   fetch(
//     `https://geocode.xyz/${lat},${long}?geoit=json&auth=232862416608636259384x87855`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Data not retrieved from API (${response.status})`);
//       }
//       // console.log(response);
//       if (response.status === 403) {
//         throw new Error(`Can't load API more than 3 times per second`);
//       }
//       // console.log(response.status);
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);
//       getCountryData(data.country);
//     })
//     .catch(err => {
//       console.log(`Something went wrong,  ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       // getCountryData(data.country);
//       console.log('Thank you for using Rapheal API');
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(-33.933, 18.474);

// console.log('Test start!');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end!');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening, sit tight!');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!');
//     } else {
//       reject(new Error('You lost your money, try again!'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('5 seconds passed'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

/////////////////////////////////////////
// Promisifying the Geolocation API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   console.log('Where Am I?');
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: long } = pos.coords;

//       return fetch(
//         `https://geocode.xyz/${lat},${long}?geoit=json&auth=232862416608636259384x87855`
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Data not retrieved from API (${response.status})`);
//       }
//       // console.log(response);
//       if (response.status === 403) {
//         throw new Error(`Can't load API more than 3 times per second`);
//       }
//       // console.log(response.status);
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);
//       getCountryData(data.country);
//     })
//     .catch(err => {
//       console.log(`Something went wrong,  ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       // getCountryData(data.country);
//       console.log('Thank you for using Rapheal API');
//     });
// };

// btn.addEventListener('click', whereAmI);

/////////////////////////////////////////////////
// Challenge #2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(3).then(() => {
//   console.log('3 second passed');
// });

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image1 = document.createElement('img');
    image1.src = imgPath;
    image1.addEventListener('load', function () {
      imagesClass.append(image1);
      btn.style.display = 'none';
      resolve(image1);
    });
    image1.addEventListener('error', function () {
      reject(new Error('Image not retrieved from source'));
    });
  }).catch(err => {
    console.error(`Something went wrong,  ${err.message}. Try again!`);
  });
};

// let currentImage;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 shown');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     btn.style.display = 'block';
//     console.log('Image 1 disappeared');
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 shown');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     btn.style.display = 'block';
//     console.log('Image 2 disappeared');
//   })
//   .catch(err => console.error(err.message));

///////////////////////////////////////
// Consuming Promises with Async/Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// ).then(res => console.log(res));

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: long } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json&auth=232862416608636259384x87855`
    );
    if (!resGeo.ok) {
      throw new Error('Problem getting location data');
    }
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // Country data
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );
    if (!res.ok) {
      throw new Error('Problem getting location country');
    }
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    btn.style.display = 'none';

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI();
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err.message))
//   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(err.message);
//   }
//   console.log('3: Finished getting location');
// })();

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
// const generateAdvice = async function () {
//   const res = await fetch(`https://api.adviceslip.com/advice`);
//   const adviceData = await res.json();
//   console.log(adviceData.slip.advice);
// };

// generateAdvice();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://countries-api-836d.onrender.com/countries/name/${c3}`
//     // );
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('Portugal', 'Canada', 'Tanzania');

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://countries-api-836d.onrender.com/countries/name/Tanzania`),
//   timeout(2),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

/////////////////////////////////////////////////
//////////////// Challenge 3 ///////////////////
// Part 1

// let currentImage;

// const loadNPause = async function () {
//   try {
//     currentImage = await createImage('img/img-1.jpg');
//     console.log('Image 1 shown');
//     await wait(2);

//     currentImage.style.display = 'none';

//     btn.style.display = 'block';
//     console.log('Image 1 disappeared');
//     await wait(2);
//     currentImage = await createImage('img/img-2.jpg');
//     console.log('Image 2 shown');
//     await wait(2);
//     currentImage.style.display = 'none';
//     btn.style.display = 'block';
//     console.log('Image 2 disappeared');
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// loadNPause();

// Part 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const dataNew = await Promise.all(imgs);
    console.log(dataNew);
    dataNew.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err.message);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
