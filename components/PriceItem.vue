<template>
  <li class="w-full mb-3 flex justify-between font-light last:mb-0">
    <span class="underline">
      {{ label }}
    </span>

    <span>
      {{ value }} €
    </span>
  </li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>
