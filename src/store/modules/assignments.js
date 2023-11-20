export default {
  namespaced: true,
  state: {
    assignmentsList: [],
  },
  getters: {
    assignmentsList: (state) => state.assignmentsList,

    filledAssignmentsList: (state, getters, rootState, rootGetters) =>
      state.assignmentsList.map((assignment) => ({
        id: assignment.id,
        driverName: rootGetters['drivers/getDriverById'](assignment.driverId).name,
        busLicensePlate: rootGetters['busses/getBusById'](assignment.busId).licensePlate,
      })),
  },
  mutations: {
    addAssignment(state, assignment) {
      state.assignmentsList.push(assignment)
    },

    removeAssignment(state, assignmentId) {
      state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.id !== assignmentId)
    },

    removeAssignmentByBusId(state, busId) {
      state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.busId !== busId)
    },

    removeAssignmentByDriverId(state, driverId) {
      state.assignmentsList = state.assignmentsList.filter((assignment) => assignment.driverId !== driverId)
    },
  },
  actions: {
    addAssignment({ commit }, assignment) {
      commit('addAssignment', { id: new Date().getTime(), ...assignment })
    },

    removeAssignment({ commit }, assignmentId) {
      commit('removeAssignment', assignmentId)
    },

    removeAssignmentByBusId({ commit }, busId) {
      commit('removeAssignmentByBusId', busId)
    },

    removeAssignmentByDriverId({ commit }, driverId) {
      commit('removeAssignmentByDriverId', driverId)
    },
  },
  modules: {},
}
