import PhotosController from "./Controllers/PhotosController.js";
import NasaPhotosController from "./Controllers/NasaPhotosController.js"
import PokemonsController from "./Controllers/PokemonsController.js";
import UnsplashController from "./Controllers/UnsplashController.js"

class App {
  photosController = new PhotosController();
  nasaPhotosController = new NasaPhotosController();
  pokemonsController = new PokemonsController();
  unsplashController = new UnsplashController()
}

window["app"] = new App();
