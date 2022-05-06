<template>
  <ul>
    <ProfessionalItem
      v-for="professional in professionals"
      :key="professional.id"
      :professional="professional"
      :selected="value == professional.id"
      @select="$emit('input', professional.id)"
    />
  </ul>
</template>

<script>
export default {
  props: {
    professionals: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      default: null
    }
  }
}
</script>
