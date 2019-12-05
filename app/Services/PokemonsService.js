import store from "../store.js";
import Pokemon from "../Models/Pokemon.js"


// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  timeout: 3000
})

class PokemonsService {

  async getPhoto() {
    return await _pokemonApi.get().then(res => {
      console.log("from pokemon api", res.data);
      store.commit("pokemonPhoto", res.data);
      console.log("store pokemon photo", store.State.pokemonPhoto);

    });
  }
}

const service = new PokemonsService();
export default service;
