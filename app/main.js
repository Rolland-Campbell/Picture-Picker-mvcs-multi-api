import PhotosController from "./Controllers/PhotosController.js";

class App {
  photosController = new PhotosController();
}

window["app"] = new App();
