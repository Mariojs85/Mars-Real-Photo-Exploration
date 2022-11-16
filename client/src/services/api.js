// import axios from 'axios'

// const baseURL = `https://api.nasa.gov/mars-photos/api/v1/`;
// const apiKey = `hUkkfpMaQjV6dDNHBwxX2Q7nYd0R8Te9hR0o0z6l`;
const allRovers = [`Spirit`, `Opportunity`, `Curiosity`, `Perseverance`];
let rover = [];
allRovers.forEach((element) => {
  rover.push(element);
});



const getPhotos = async () => {
  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1//manifests/Curiosity?api_key=hUkkfpMaQjV6dDNHBwxX2Q7nYd0R8Te9hR0o0z6l`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export { getPhotos };

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
