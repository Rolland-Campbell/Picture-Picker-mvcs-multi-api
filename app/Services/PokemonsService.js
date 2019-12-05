import store from "../store.js";
import Pokemon from "../Models/Pokemon.js"


// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Winter19/pokemon",
  timeout: 3000
})

class PokemonsService {

  async getPhoto() {
    let random = Math.floor((Math.random() * 12) + 1);
    return await _pokemonApi.get().then(res => {
      console.log("from pokemon api", res.data.data);
      store.commit("pokemonPhoto", res.data.data);
      console.log("store pokemon photo", store.State.pokemonPhoto);

    });
  }
}

const service = new PokemonsService();
export default service;
