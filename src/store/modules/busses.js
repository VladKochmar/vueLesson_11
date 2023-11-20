export default {
  namespaced: true,
  state: {
    bussesList: [],
  },
  getters: {
    bussesList: (state) => state.bussesList,

    selectBussesList: (state, getters, rootState, rootGetters) =>
      !rootGetters['assignments/assignmentsList'].length
        ? state.bussesList
        : state.bussesList.filter(
            (bus) => !rootGetters['assignments/assignmentsList'].some((assignment) => assignment.busId === bus.id)
          ),

    getBusById: (state) => (busId) => state.bussesList.find((bus) => bus.id == busId),
  },
  mutations: {
    addBus(state, bus) {
      state.bussesList.push(bus)
    },

    removeBus(state, busId) {
      state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
    },

    updateBus(state, busData) {
      const index = state.bussesList.findIndex((bus) => bus.id === busData.id)
      state.bussesList[index] = busData
    },
  },
  actions: {
    addBus({ commit }, bus) {
      commit('addBus', { id: new Date().getTime(), ...bus })
    },

    removeBus({ commit, dispatch }, busId) {
      commit('removeBus', busId)
      dispatch('assignments/removeAssignmentByBusId', busId, { root: true })
    },

    updateBus({ commit }, bus) {
      commit('updateBus', bus)
    },
  },
  modules: {},
}
