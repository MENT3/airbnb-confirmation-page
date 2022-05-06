<template>
  <div class="sticky top-24 h-max w-5/12 p-6 border rounded-lg">
    <h2 class="mb-4 text-lg font-semibold">
      Détail du prix
    </h2>

    <PriceList :prices="prices"/>

    <hr class="my-8">

    <div class="flex justify-between">
      <span class="font-semibold">
        Total
      </span>

      <span>
        {{ total }} €
      </span>
    </div>
  </div>
</template>

<script>
const prices = [{
  label: '13 nuits x 65.00€',
  value: 845.00
}, {
  label: 'Taxes et frais de séjour',
  value: 25.35
}]

export default {
  computed: {
    prices() {
      return prices
    },
    total() {
      return this.prices.reduce((acc, price) => acc + price.value, 0)
    }
  }
}
</script>
