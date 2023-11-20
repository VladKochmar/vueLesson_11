<template>
  <tr>
    <td>{{ driver.name }}</td>
    <td>{{ driver.exp }}</td>
    <td><router-link :to="{ name: 'driver', params: { id: driver.id } }">Змінити</router-link></td>
    <td><button @click="removeDriver(driver.id)">Видалити</button></td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DriverItem',

  props: {
    driver: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('drivers', ['removeDriver']),
  },
}
</script>

<style lang="scss" scoped></style>
