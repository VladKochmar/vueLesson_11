<template>
  <div class="filter-container">
    Фільтри:
    <label>
      ПІБ
      <input type="text" v-model="filterData.name" />
    </label>
    Стаж:
    <label>
      Від
      <input type="text" v-model="filterData.minNum" />
    </label>
    <label>
      До
      <input type="text" v-model="filterData.maxNum" />
    </label>
    <button @click="onReset">Скинути фільтр</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DriversFilter',

  data() {
    return {
      filterData: {},
    }
  },

  methods: {
    ...mapActions('drivers', ['setFilter']),

    onReset() {
      this.filterData = {}
    },
  },

  watch: {
    filterData: {
      handler(newFilterValue) {
        this.setFilter(newFilterValue)
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  gap: 1.25rem;
}
</style>
