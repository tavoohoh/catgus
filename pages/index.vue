<template>
  <div class="index">
    <safe-the-date />
  </div>
</template>

<script setup>
import SafeTheDate from "~/componentes/safe-the-date.vue";

useHead({
  title: "Guarda la fecha | Cata & Gus",
  meta: [
    { name: "description", content: "Estas invitad@ a nuestra boda ¡apunta la fecha en tu calendario!" }
  ]
})
</script>

<style scoped lang="css">
.index {
  height: 100%;
}
</style>
