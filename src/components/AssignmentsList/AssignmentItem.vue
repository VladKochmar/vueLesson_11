<template>
  <tr>
    <td>{{ assignment.driverName }}</td>
    <td>{{ assignment.busLicensePlate }}</td>
    <td><button @click="removeAssignment(assignment.id)">Видалити</button></td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AssignmentItem',

  props: {
    assignment: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('assignments', ['removeAssignment']),
  },
}
</script>

<style lang="scss" scoped></style>
