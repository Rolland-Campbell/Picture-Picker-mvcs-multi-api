import store from "../store.js";

// @ts-ignore
let _nasaApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod",
  timeout: 8000
})

class PhotosService {

  async getPhoto() {
    return await _nasaApi.get().then(res => {
      console.log(res);
      store.commit("nasaPhoto", res.data);
    });
  }
}

const service = new PhotosService();
export default service;
