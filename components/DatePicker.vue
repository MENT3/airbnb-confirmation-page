<template>
  <no-ssr>
    <v-date-picker
      trim-weeks
      :value="value"
      :style="'border: 0'"
      @input="$emit('input', $event)"
    />
  </no-ssr>
</template>

<script>
export default {
  props: {
    value: {
      type: Date,
      required: true
    }
  }
}
</script>
