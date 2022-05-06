<template>
  <div class="container mt-16">
    <h1 class="mb-12 text-3xl text-neutral-900 font-medium">
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
          <h2 class="mb-5 text-xl font-semibold">
            Services
          </h2>

          <div
            v-for="service in servicesWithDisponibilities"
            :key="service.id"
            class="mb-4 flex justify-between item-center last:mb-0"
          >
            <div>
              <p>
                {{ service.title }}
              </p>

              <div
                v-if="!service.available"
                class="text-neutral-700 font-light"
              >
                {{ formatedServiceDescription(service.type) }}
              </div>
            </div>

            <button
              class="h-min px-3 py-1 border border-neutral-700 rounded-lg"
              @click="openServiceModal(service.type)"
              v-if="service.available"
            >
              Ajouter
            </button>

            <button
              class="h-min px-3 py-1 border border-neutral-700 rounded-lg"
              @click="removeService(service.type)"
              v-else
            >
              Supprimer
            </button>
          </div>
        </div>

        <hr class="my-8">

        <img src="@/assets/images/fake_form.png" alt="form">
      </div>

      <Price />
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

const householdModal = () => import('@/components/HouseholdModal')
const cookingModal = () => import('@/components/CookingModal')
const haircutterModal = () => import('@/components/HaircutterModal')

export default {
  data() {
    return {
      serviceModal: null
    }
  },

  computed: {
    ...mapGetters('services', ['servicesWithDisponibilities']),

    formatedServiceDescription() {
      return (serviceType) => {
        const serviceInfos = this.getServiceInfos(serviceType)

        return `${serviceInfos.professional?.name} ${serviceInfos.professional?.price}€`
      }
    }
  },

  methods: {
    openServiceModal(service) {
      this.serviceModal = eval(`${service}Modal`)
    },

    removeService(serviceType) {
      this.$store.commit('user/REMOVE_SELECTED_SERVICE_FROM_TYPE', serviceType)
    },

    getServiceInfos(serviceType) {
      // Refactor to use store methods
      const service = this.$store.state.user.selectedServices.find(s => s.type === serviceType)
      const professional = this.$store.state.services.services.find(s => s.type === serviceType)?.professionals.find(p => p.id === service.professionalId)

      return {
        ...service,
        professional
      }
    }
  }
}
</script>
