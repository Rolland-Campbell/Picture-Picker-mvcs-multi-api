import PokemonsService from "../Services/PokemonsService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = ""
  let photo = store.State.pokemonPhoto.sprites.front_default;
  document.querySelector("#pokemonPic").innerHTML = template += `<img src="${photo}" class="photo">`
}

//Public
export default class PokemonsController {
  constructor() {
    PokemonsService.getPhoto()
    store.subscribe("pokemonPhoto", _draw);
  }
}
