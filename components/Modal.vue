<template>
  <div class="absolute inset-0 flex items-center justify-center bg-gray-600 z-50">
    <div class="min-w-[33%] p-4 bg-white rounded">
      <button @click.prevent="$emit('close')">Fermer</button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
