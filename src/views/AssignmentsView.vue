<template>
  <div>
    <h1>Призначення</h1>
    <assignments-list />
    <assignment-creator />
  </div>
</template>

<script>
import AssignmentCreator from '@/components/AssignmentCreator.vue'
import AssignmentsList from '@/components/AssignmentsList'

export default {
  name: 'AssignmentsView',

  components: {
    AssignmentsList,
    AssignmentCreator,
  },
}
</script>

<style lang="scss" scoped></style>
