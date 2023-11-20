<template>
  <div>
    <label>
      ПІБ
      <input v-model="driver.name" type="text" class="input" />
    </label>
    <label>
      Стаж
      <input v-model="driver.exp" type="text" class="input" />
    </label>
    <button @click="onAction">{{ actionButtonTitle }}</button>
    <router-link :to="{ name: 'drivers' }">Скасувати</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DriverEditor',

  data() {
    return {
      driver: [],
    }
  },

  computed: {
    ...mapGetters('drivers', ['getDriverById']),

    driverId() {
      return this.$route.params.id
    },

    actionButtonTitle() {
      return this.driverId ? 'Оновити' : 'Створити'
    },
  },

  methods: {
    ...mapActions('drivers', ['addDriver', 'updateDriver']),

    onAction() {
      if (this.driverId) this.updateDriver(this.driver)
      else this.addDriver(this.driver)

      this.$router.push({ name: 'drivers' })
    },
  },

  created() {
    if (this.driverId) this.driver = { ...this.getDriverById(this.driverId) }
  },
}
</script>

<style lang="scss" scoped></style>
