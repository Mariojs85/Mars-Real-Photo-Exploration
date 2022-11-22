// import axios from 'axios'

const baseURL = `https://api.nasa.gov/mars-photos/api/v1/`;
const apiKey = `hUkkfpMaQjV6dDNHBwxX2Q7nYd0R8Te9hR0o0z6l`;
const allRovers = [`Spirit`, `Opportunity`, `Curiosity`, `Perseverance`];
let rover = [];
allRovers.forEach((element) => {
  rover.push(element);
});

// manifest Endpoint

const getManifest = async () => {
  try {
    const res = await fetch(
      `${baseURL}/manifests/Curiosity?api_key=${apiKey}`
    );
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Photo Endpoint
//////////////////////////////////
// Queries by Martian sol:
// Querying by Earth date:
      // Filtering Queries by Camera:
// Query For Latest Photos

const getPhotos = async (sol, earth_date, latest_photos) => {
  try {
    const result = await fetch(
      `${baseURL}/rovers/Curiosity/photos?api_key=${apiKey}&sol=1000&camera=fhaz`
    );
    if (!result.ok) {
      throw new Error(`Error! status: ${result.status}`);
    }
    const data = await result.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};




export { getManifest, getPhotos };

// const instance = axios.create ({
//     baseURL : 'https://api.nasa.gov/mars-photos/api/v1/',
//     headers: {'Get': 'application/json'}
//   })

// async function getPhotos(rovers, camera, sol, earthDate, manifest){
//     try{
//         const res = await instance.get(
//             `/photos/generate?apiKey=${apiKey}&rovers=${rovers}&camera=${camera}&sol=${sol}&earthDate=${earthDate}&manifest=${manifest}`);
//         return res.data
//     }
//     catch(error){
//         throw new Error(error)
//     }
// }
