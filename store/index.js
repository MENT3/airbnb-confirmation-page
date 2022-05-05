import { services } from '@/misc/services'

export const actions = {
  nuxtServerInit({ commit }) {
    commit('services/SET_SERVICES', services)

    commit('user/ADD_SELECTED_SERVICE', {
      type: 'household',
      date: new Date(),
      professionalId: 1
    })
  }
}
