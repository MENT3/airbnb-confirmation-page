<template>
  <ul class="w-full">
    <PriceItem
      v-for="(price, i) in prices"
      :key="i"
      :label="price.label"
      :value="price.value"
    />
  </ul>
</template>

<script>
export default {
  props: {
    prices: {
      type: Array,
      required: true
    }
  }
}
</script>
