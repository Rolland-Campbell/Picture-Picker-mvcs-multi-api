import NasaPhotosService from "../Services/NasaPhotosService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = ""
  let photo = store.State.photo.url;
  document.querySelector("#nasaPic").innerHTML = template += `<img src="${photo}" class="photo">`
}

//Public
export default class PhotosController {
  constructor() {
    NasaPhotosService.getPhoto()
    store.subscribe("nasaPhoto", _draw);
  }
}
