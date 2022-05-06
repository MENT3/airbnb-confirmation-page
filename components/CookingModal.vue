<template>
  <Modal @close="$emit('close')">
    <h2 class="mt-4 pl-3 text-xl font-semibold">
      Cuisine à domicile
    </h2>

    <hr class="mt-4 mb-4 mx-3">

    <div class="flex space-x-8">
      <DatePicker v-model="selectedDate" />

      <ProfessionalsList
        v-model="selectedProfessional"
        :professionals="cookingProfessionals"
      />
    </div>

    <button
      class="mt-8 py-2 px-3 bg-neutral-900 text-white font-semibold rounded-lg float-right transition duration-100 ease-in-out hover:bg-neutral-800"
      @click="submit"
    >
      Valider
    </button>
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      selectedDate: new Date(),
      selectedProfessional: null
    }
  },

  computed: mapGetters('services', ['cookingProfessionals']),

  methods: {
    submit() {
      this.$store.commit('user/ADD_SELECTED_SERVICE', {
        type: 'cooking',
        date: this.selectedDate,
        professionalId: this.selectedProfessional
      })

      this.$emit('close')
    }
  }
}
</script>
