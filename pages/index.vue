<template>
  <div class="container flex space-x-24">
    <div class="w-7/12 bg-green-100">
      <h1 class="text-3xl text-gray-700 font-semibold">
        Demande de réservation
      </h1>
      <div>
        <h2>
          Votre voyage
        </h2>
      </div>
      <br v-for="i in 200" :key="i">
    </div>

    <div class="w-5/12 bg-yellow-100 border rounded">
      salut
    </div>
  </div>
</template>

<script>
export default {
}
</script>
