import PhotosController from "./Controllers/PhotosController.js";
import NasaPhotosController from "./Controllers/NasaPhotosController.js"
import PokemonsController from "./Controllers/PokemonsController.js";

class App {
  photosController = new PhotosController();
  nasaPhotosController = new NasaPhotosController();
  pokemonsController = new PokemonsController()
}

window["app"] = new App();
