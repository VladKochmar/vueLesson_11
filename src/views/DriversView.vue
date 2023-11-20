<template>
  <div>
    <h1>Нащі водії</h1>
    <drivers-filter />
    <drivers-list />
  </div>
</template>

<script>
import DriversFilter from '@/components/DriversFilter.vue'
import DriversList from '@/components/DriversList'

export default {
  name: 'DriversView',

  components: {
    DriversList,
    DriversFilter,
  },
}
</script>

<style lang="scss" scoped></style>
