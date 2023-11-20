<template>
  <div>
    <table>
      <tr>
        <th>ПІБ</th>
        <th>Стаж</th>
      </tr>
      <driver-item v-for="driver in filteredDriversList" :key="driver.id" :driver="driver" />
    </table>
    <router-link :to="{ name: 'driver' }">Додати водія</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import DriverItem from './DriverItem.vue'

export default {
  name: 'DriversList',

  components: {
    DriverItem,
  },

  computed: {
    ...mapGetters('drivers', ['filteredDriversList']),
  },
}
</script>

<style lang="scss" scoped></style>
