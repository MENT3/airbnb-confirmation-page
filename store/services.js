export const state = () => ({
  services: []
})

export const mutations = {
  SET_SERVICES(state, payload) {
    state.services = payload
  }
}
