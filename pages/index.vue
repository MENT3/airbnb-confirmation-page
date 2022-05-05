<template>
  <div>
    <div class="container flex space-x-24">
      <div class="w-7/12 bg-green-100">
        <h1 class="text-3xl text-gray-700 font-semibold">
          Demande de réservation
        </h1>
        <div>
          <h2>
            Votre voyage
          </h2>
        </div>

        <hr class="mx-2 my-4">

        <div>
          <h3 class="text-xl text-gray-800">
            Services
          </h3>

          <div
            v-for="service in services"
            :key="service.id"
            class="mb-2 flex justify-between last:mb-0"
          >
            <p>
              {{ service.title }}
            </p>

            <button
              class="px-3 py-1 border border-gray-700 rounded-lg"
              @click="openServiceModal('Household')"
            >
              Ajouter
            </button>
          </div>
        </div>

        <br v-for="i in 100" :key="i">
      </div>

      <div class="w-5/12 bg-yellow-100 border rounded">
        salut
      </div>
    </div>

    <component
      :is="serviceModal"
      v-if="serviceModal"
      @close="serviceModal = null"
    />
  </div>
</template>

<script>
const Household = () => import('@/components/services/Household')

export default {
  data() {
    return {
      services: [{
        id: 1,
        title: 'Ménage'
      }, {
        id: 2,
        title: 'Cuisine à domicile'
      }],
      serviceModal: null
    }
  },

  methods: {
    openServiceModal(service) {
      this.serviceModal = eval(service)
    }
  }
}
</script>
