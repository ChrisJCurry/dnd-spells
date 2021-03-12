<template>
  <div>
    <h1>{{ apiPokemon.name }}</h1>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import apiPokemonService from '../services/ApiPokemonService'

export default {
  name: 'ApiPokemon',
  props: {
    apiPokemon: Object
  },
  setup() {
    const state = reactive({
      apiPokemon: computed(() => AppState.apiPokemon)
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

<style>

</style>
