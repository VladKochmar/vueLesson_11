import { isMatchFilter } from '../helpers'

export default {
  namespaced: true,
  state: {
    driversList: [],
    filter: {},
  },
  getters: {
    driversList: (state) => state.driversList,

    filteredDriversList: (state) => state.driversList.filter((driver) => isMatchFilter(driver, state.filter)),

    selectDriversList: (state, getters, rootState, rootGetters) =>
      !rootGetters['assignments/assignmentsList'].length
        ? state.driversList
        : state.driversList.filter(
            (driver) =>
              !rootGetters['assignments/assignmentsList'].some((assignment) => assignment.driverId === driver.id)
          ),

    getDriverById: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
  },
  mutations: {
    addDriver(state, driver) {
      state.driversList.push({ id: new Date().getTime(), ...driver })
    },

    removeDriver(state, driverId) {
      state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
    },

    updateDriver(state, driverData) {
      const index = state.driversList.findIndex((driver) => driver.id === driverData.id)
      state.driversList[index] = driverData
    },

    setFilter(state, filterData) {
      state.filter = filterData
    },
  },
  actions: {
    addDriver({ commit }, driver) {
      commit('addDriver', driver)
    },

    removeDriver({ commit, dispatch }, driverId) {
      commit('removeDriver', driverId)
      dispatch('assignments/removeAssignmentByDriverId', driverId, { root: true })
    },

    updateDriver({ commit }, driver) {
      commit('updateDriver', driver)
    },

    setFilter({ commit }, filterData) {
      commit('setFilter', filterData)
    },
  },
  modules: {},
}
