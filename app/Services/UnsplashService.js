import store from "../store.js";
import Unsplash from "../Models/Unsplash.js"

let apiKey = "c781a4cf935052e3b8ed4c040c4eef2e829f0c2da01fefc8c458bb590bca95a9"

// @ts-ignore
let _unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/search",
  timeout: 8000
})

class UnsplashService {
  async getPhoto(search) {
    return await _unsplashApi.get(`photos?per_page=10&query=${search}&client_id=${apiKey}`).then(res => {
      let results = res.data.results.map(rawData => new Unsplash(rawData));
      store.commit("unsplash", results);
      console.log("from unsplash photos", res.data.results);
      console.log("store unsplash", store.State.unsplash);
    });
  }
}

const service = new UnsplashService();
export default service;
