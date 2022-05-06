<template>
  <li
    class="mb-2 px-3 py-2 rounded-lg cursor-pointer transition duration-100 ease-in-out hover:bg-neutral-100 last:mb-0"
    :class="{ 'bg-neutral-100': selected }"
    @click="$emit('select')"
  >
    <div class="flex space-x-3">
      <!-- <div class="w-16 flex justify-center items-center bg-neutral-200 rounded-lg">
        <svg class="w-6 h-6 fill-neural-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
        </svg>
      </div> -->

      <div>
        <div>
          <p class="text-md text-neutral-800">
            {{ professional.name }}
          </p>
          <p class="text-neutral-600 text-sm font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div class="w-full mt-2 flex justify-between text-sm">
          <div>
            Durée :
            {{ professional.duration }} min
          </div>
          <div>
            {{ professional.price }}€
          </div>
        </div>
      </div>
    </div>

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
