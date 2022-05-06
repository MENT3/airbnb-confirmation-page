<template>
  <div class="sticky top-24 h-max w-5/12 p-6 border rounded-lg">
    <h2 class="mb-4 text-lg font-semibold">
      Détail du prix
    </h2>

    <PriceList :prices="prices"/>

    <hr class="my-6">

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
      // Refactor to use store methods
      const selectedServices = this.$store.state.user.selectedServices
      const dynamicPrices = selectedServices.map(service => {
        const serviceInfos = this.$store.state.services.services.find(s => s.type === service.type)
        const professional = serviceInfos?.professionals.find(p => p.id === service.professionalId)

        return {
          label: serviceInfos.title,
          value: professional.price,
        }
      })

      return [
        ...prices,
        ...dynamicPrices
      ]
    },

    total() {
      return this.prices.reduce((acc, price) => acc + price.value, 0)
    }
  }
}
</script>
