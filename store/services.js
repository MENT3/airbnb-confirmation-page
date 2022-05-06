export const state = () => ({
  services: []
})

export const getters = {
  serviceProfessionals: state => type => {
    return state.services.find(s => s.type === type)?.professionals
  },
  householdProfessionals(state, getters) {
    return getters.serviceProfessionals('household')
  },
  cookingProfessionals(state, getters) {
    return getters.serviceProfessionals('cooking')
  },
  haircutterProfessionals(state, getters) {
    return getters.serviceProfessionals('haircutter')
  },
  servicesWithDisponibilities(state, getters, rootState) {
    const selectedServicesType = rootState.user.selectedServices.map(s => s.type)

    return state.services.map(s => ({
      ...s,
      available: !selectedServicesType.includes(s.type)
    }))
  }
}

export const mutations = {
  SET_SERVICES(state, payload) {
    state.services = payload
  }
}
