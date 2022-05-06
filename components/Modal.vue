<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-[#00000080] z-50"
    @click.self.prevent="$emit('close')"
  >
    <div class="min-w-[50%] p-4 bg-white rounded-lg">
      <div class="w-full">
        <button
          @click.prevent="$emit('close')"
          class="p-2 rounded-full hover:bg-gray-100"
        >
          <svg class="w-4 h-4 fill-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
