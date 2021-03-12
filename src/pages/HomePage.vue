<template>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col-12">
        <h1>Enter  Compendium</h1>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-6">
        <h2>Pokedex</h2>
        <div class="api-spells">
          <ol>
            <li>
              <ApiPokemon v-for="pokemonData in state.apiPokemon" :key="pokemonData.name" :api-pokemon="pokemonData" />
            </li>
          </ol>
        </div>
      </div>
      <div class="col-6">
        <h2>Saved Pokemon</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { apiPokemonService } from '../services/ApiPokemonService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      apiPokemon: computed(() => AppState.apiPokemon)
    })
    onMounted(() => {
      apiPokemonService.getAllPokemon()
    })
    return {
      state,
      async getAllPokemon() {
        await apiPokemonService.getAllPokemon()
      }
    }
  }

}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
