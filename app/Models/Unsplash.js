export default class Unsplash {
  constructor(data) {
    this.img = data.urls.regular
  }

  get Template() {
    return `
        <img src="${this.img}" class="photo mt-2 mr-2">
        `
  }
}