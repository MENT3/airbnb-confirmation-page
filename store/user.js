export const state = () => ({
  selectedServices: []
})

export const mutations = {
  ADD_SELECTED_SERVICE(state, payload) {
    state.selectedServices.push(payload)
  },

  REMOVE_SELECTED_SERVICE_FROM_TYPE(state, type) {
    state.selectedServices = state.selectedServices.filter(s => s.type !== type)
  }
}
