<template>
  <div>
    <label>
      Номер
      <input v-model="bus.licensePlate" type="text" class="input" />
    </label>
    <label>
      Кількість місць
      <input v-model="bus.seats" type="text" class="input" />
    </label>
    <button @click="onAction">{{ actionButtonTitle }}</button>
    <router-link :to="{ name: 'busses' }">Скасувати</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BusEditor',

  data() {
    return {
      bus: {},
    }
  },

  computed: {
    ...mapGetters('busses', ['getBusById']),

    busId() {
      return this.$route.params.id
    },

    actionButtonTitle() {
      return this.busId ? 'Оновити' : 'Створити'
    },
  },

  methods: {
    ...mapActions('busses', ['addBus', 'updateBus']),

    onAction() {
      if (this.busId) this.updateBus(this.bus)
      else this.addBus(this.bus)

      this.$router.push({ name: 'busses' })
    },
  },

  created() {
    if (this.busId) this.bus = { ...this.getBusById(this.busId) }
  },
}
</script>

<style lang="scss" scoped></style>
