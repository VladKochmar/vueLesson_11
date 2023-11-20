<template>
  <tr>
    <td>{{ bus.licensePlate }}</td>
    <td>{{ bus.seats }}</td>
    <td><router-link :to="{ name: 'bus', params: { id: bus.id } }">Змінити</router-link></td>
    <td><button @click="removeBus(bus.id)">Видалити</button></td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BusItem',

  props: {
    bus: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('busses', ['removeBus']),
  },
}
</script>

<style lang="scss" scoped></style>
