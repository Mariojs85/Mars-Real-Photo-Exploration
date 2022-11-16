import axios from 'axios'

const apiKey= `hUkkfpMaQjV6dDNHBwxX2Q7nYd0R8Te9hR0o0z6l`

const instance = axios.create ({
    baseURL : 'https://api.nasa.gov/mars-photos/api/v1/',
    headers: {'Get': 'application/json'}
  })

async function getPhotos(rovers, camera, sol, earthDate, manifest){
    try{
        const res = await instance.get(
            `/photos/generate?apiKey=${apiKey}&rovers=${rovers}&camera=${camera}&sol=${sol}&earthDate=${earthDate}&manifest=${manifest}`);
        return res.data
    } 
    catch(error){
        throw new Error(error)
    }
}


export { getPhotos }