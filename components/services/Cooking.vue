<template>
  <Modal @close="$emit('close')">
    <h1>
      Cuisine à domicile
    </h1>

    <div class="flex">
      <no-ssr>
        <v-date-picker
          trim-weeks
          v-model="selectedDate"
        />
      </no-ssr>

      <div>
        <ul class="mt-3">
          <li
            v-for="professional of cookingProfessionals"
            :key="professional.id"
            @click="selectedProfessional = professional.id"
            :class="{ 'bg-green-200': selectedProfessional === professional.id }"
            class="px-3 py-1 mb-1 rounded-lg cursor-pointer last:mb-0"
          >
            {{ professional.name }}
          </li>
        </ul>
      </div>
    </div>

    <button
      class="mt-2 py-2 px-3 bg-red-400 text-white font-semibold rounded-lg float-right transition duration-100 ease-in-out hover:bg-red-500"
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
