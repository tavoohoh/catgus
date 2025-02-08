<template>
  <div>
    <h2>{{ $t('title.todo') }}</h2>
    <p></p>
  </div>
</template>

<script setup>
const { $t } = useNuxtApp()
</script>

<style scoped lang="css">
.my-component {
  color: red;
}
</style>
