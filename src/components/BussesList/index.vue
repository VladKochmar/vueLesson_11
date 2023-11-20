<template>
  <div>
    <table>
      <tr>
        <th>Номер</th>
        <th>Кількість місць</th>
      </tr>
      <bus-item v-for="bus in bussesList" :key="bus.id" :bus="bus" />
    </table>
    <router-link :to="{ name: 'bus' }">Додати автобус</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BusItem from './BusItem.vue'

export default {
  name: 'BussesList',

  components: {
    BusItem,
  },

  computed: {
    ...mapGetters('busses', ['bussesList']),
  },
}
</script>

<style lang="scss" scoped></style>
