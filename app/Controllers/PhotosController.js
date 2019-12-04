import PhotosService from "../Services/PhotosService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = ""
  let photo = store.State.photo.url;
  document.querySelector("#sandBoxPic").innerHTML = template += `<img src="${photo}" class="photo">`
}

//Public
export default class PhotosController {
  constructor() {
    PhotosService.getPhoto()
    store.subscribe("photo", _draw);
  }
}
