import { pokeApi } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class ApiPokemonService {
  async getAllPokemon() {
    try {
      const res = await pokeApi.get('')
      AppState.apiPokemon = res.data.results
      logger.log(res)
    } catch (error) {
      logger.log(error)
    }
  }
}
export const apiPokemonService = new ApiPokemonService()
