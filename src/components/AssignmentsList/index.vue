<template>
  <div>
    <table>
      <tr>
        <th>Шофер</th>
        <th>Номер автобуса</th>
      </tr>
      <assignment-item v-for="assignment in filledAssignmentsList" :key="assignment.id" :assignment="assignment" />
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AssignmentItem from './AssignmentItem.vue'

export default {
  name: 'AssignmentsList',

  components: {
    AssignmentItem,
  },

  computed: {
    ...mapGetters('assignments', ['filledAssignmentsList']),
  },
}
</script>

<style lang="scss" scoped></style>
