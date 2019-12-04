import store from "../store.js";

// @ts-ignore
let _photoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
})

class PhotosService {
  getPhoto() {
    return _photoApi.get().then(res => {
      console.log(res);
      store.commit("photo", res.data);
    });
  }
}

const service = new PhotosService();
export default service;
