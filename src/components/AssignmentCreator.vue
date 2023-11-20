<template>
  <div>
    <h2>Нове призначення</h2>
    <label>
      Шофер:
      <select v-model="assignment.driverId">
        <option v-for="driver in selectDriversList" :key="driver.id" :value="driver.id">
          {{ driver.name }} - {{ driver.exp }}
        </option>
      </select>
    </label>
    <label>
      Автобус:
      <select v-model="assignment.busId">
        <option v-for="bus in selectBussesList" :key="bus.id" :value="bus.id">
          {{ bus.licensePlate }} - {{ bus.seats }}
        </option>
      </select>
    </label>
    <button @click="onAdd">Додати</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AssignmentCreator',

  data() {
    return {
      assignment: {},
    }
  },

  computed: {
    ...mapGetters('drivers', ['selectDriversList']),
    ...mapGetters('busses', ['selectBussesList']),
  },

  methods: {
    ...mapActions('assignments', ['addAssignment']),

    onAdd() {
      this.addAssignment(this.assignment)
      this.assignment = {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
