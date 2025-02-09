<template>
  <div>
    <h2>{{ $t('title.dress') }}</h2>
    <p>{{ $t('global.empty') }}</p>
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
