
const baseURL = `https://mars-photos.herokuapp.com/api/v1`;
//const apiKey = `hUkkfpMaQjV6dDNHBwxX2Q7nYd0R8Te9hR0o0z6l`;


// manifest Endpoint

const getManifest = async (rover) => {
  try {
    const res = await fetch(
      `${baseURL}/manifests/${rover}`
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

const getPhotos = async (data, rover) => {
  const paramsStr = [];
  Object.keys(data).forEach(k => {
    paramsStr.push(`${k}=${data[k]}`)
  })

  try {
    const result = await fetch(
      `${baseURL}/rovers/${rover}/photos?${paramsStr.join('&')}`
    );
    if (!result.ok) {
      throw new Error(`Error! status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Latest photo endpoint

const getLatestPhotos = async (rover) => {
  try {
    const res = await fetch(
      `${baseURL}/rovers/${rover}/latest_photos`
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

export { getManifest, getPhotos, getLatestPhotos };

