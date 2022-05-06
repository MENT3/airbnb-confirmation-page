<template>
  <div class="mb-4 flex justify-between items-start">
    <div>
      <h3 class="font-medium">
        {{ title }}
      </h3>

      <p class="text-neutral-700 font-light">
        {{ description }}
      </p>
    </div>

    <button class="font-medium underline">
      Modifier
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
