<template>
  <li
    class="mb-2 px-3 py-2 rounded-lg cursor-pointer transition duration-100 ease-in-out hover:bg-neutral-100 last:mb-0"
    :class="{ 'bg-neutral-100': selected }"
    @click="$emit('select')"
  >
    <p class="text-md text-neutral-800">
      {{ professional.name }}
    </p>

    <p class="text-neutral-600 text-sm font-light">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </li>
</template>

<script>
export default {
  props: {
    professional: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
