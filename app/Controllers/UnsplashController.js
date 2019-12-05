import UnsplashService from "../Services/UnsplashService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = ""
  let photo = store.State.unsplash;
  photo.forEach(p => template += p.Template)
  document.querySelector("#unsplashPic").innerHTML = template
}

//Public
export default class UnsplashController {
  constructor() {
    store.subscribe("unsplash", _draw);
  }

  async getPhoto(event) {
    try {
      event.preventDefault();
      UnsplashService.getPhoto(event.target.query.value)

    } catch (error) {

    }
  }
}
