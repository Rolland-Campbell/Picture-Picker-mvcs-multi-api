import store from "../store.js";

// @ts-ignore
let _photoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
})

class PhotosService {
  async getPhoto() {
    return await _photoApi.get().then(res => {
      console.log("from sandbox photos", res);
      store.commit("photo", res.data);
      console.log("store photo", store.State.photo);

    });
  }
}

const service = new PhotosService();
export default service;
