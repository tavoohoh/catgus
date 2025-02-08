<template>
  <div>
    <h2>{{ $t('title.save') }}</h2>
  </div>
</template>

<script setup>
const { $t } = useNuxtApp()

useHead({
  title: "Guarda la fecha | Cata & Gus",
  meta: [
    { name: "description", content: "Estas invitad@ a nuestra boda ¡apunta la fecha en tu calendario!" }
  ]
})
</script>

<style scoped lang="css">
</style>
