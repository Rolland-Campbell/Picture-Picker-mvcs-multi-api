import store from "../store.js";

// @ts-ignore
let _nasaApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=7zktgnuTzGZW6i9S37OLYXNA9fgBjpudUrwRCSFK",
  timeout: 8000
})

class PhotosService {

  async getPhoto() {
    return await _nasaApi.get().then(res => {
      console.log("from nasa api", res);
      store.commit("nasaPhoto", res.data);
      console.log("store nasa photo", store.State.nasaPhoto);

    });
  }
}

const service = new PhotosService();
export default service;
