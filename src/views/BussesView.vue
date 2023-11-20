<template>
  <div>
    <h1>Нащі автобуси</h1>
    <busses-list />
  </div>
</template>

<script>
import BussesList from '@/components/BussesList'

export default {
  name: 'BussesView',

  components: {
    BussesList,
  },
}
</script>

<style lang="scss" scoped></style>
