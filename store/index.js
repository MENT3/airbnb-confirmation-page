import { services } from '@/misc/services'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    commit('services/SET_SERVICES', services)
  }
}
