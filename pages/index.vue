<template>
  <div class="container mt-16">
    <h1 class="mb-12 text-3xl text-gray-900 font-medium">
      Demande de réservation
    </h1>

    <div class="flex space-x-24">
      <div class="w-7/12">
        <div>
          <h2 class="mb-5 text-xl font-semibold">
            Votre voyage
          </h2>
        </div>

        <InformationItem
          title="Dates"
          description="19 Mai - 30 Join"
        />

        <InformationItem
          title="Personnes"
          description="2 Adultes"
        />

        <hr class="my-8">

        <div>
          <h3 class="mb-4 text-xl text-gray-800">
            Services
          </h3>

          <div
            v-for="service in servicesWithDisponibilities"
            :key="service.id"
            class="mb-2 flex justify-between last:mb-0"
          >
            <p>
              {{ service.title }}
            </p>

            <button
              class="px-3 py-1 border border-gray-700 rounded-lg"
              @click="openServiceModal(service.type)"
              v-if="service.available"
            >
              Ajouter
            </button>

            <button
              class="px-3 py-1 border border-gray-700 rounded-lg"
              @click="removeService(service.type)"
              v-else
            >
              Supprimer
            </button>
          </div>
        </div>

        <br v-for="i in 100" :key="i">
      </div>

      <div class="w-5/12 bg-yellow-100 border rounded">
        prix
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
import { mapGetters } from 'vuex'

const householdModal = () => import('@/components/services/HouseholdModal')
const cookingModal = () => import('@/components/services/CookingModal')

export default {
  data() {
    return {
      serviceModal: null
    }
  },

  computed: mapGetters('services', ['servicesWithDisponibilities']),

  methods: {
    openServiceModal(service) {
      this.serviceModal = eval(`${service}Modal`)
    },

    removeService(serviceType) {
      this.$store.commit('user/REMOVE_SELECTED_SERVICE_FROM_TYPE', serviceType)
    }
  }
}
</script>
