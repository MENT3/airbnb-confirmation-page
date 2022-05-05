<template>
  <Modal @close="$emit('close')">
    <h1>
      Ménage
    </h1>

    <div>
      <no-ssr>
        <v-date-picker v-model="selectedDate">
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
      </no-ssr>

      <div>
        <ul>
          <li
            v-for="i in 10"
            :key="i"
          >
            Coiffeur {{ i }}
          </li>
        </ul>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: new Date()
    }
  }
}
</script>
