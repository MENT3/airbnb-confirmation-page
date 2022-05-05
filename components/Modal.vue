<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-[#00000080] z-50"
    @click.self.prevent="$emit('close')"
  >
    <div class="min-w-[33%] p-8 bg-white rounded-lg">
      <button @click.prevent="$emit('close')">Fermer</button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
