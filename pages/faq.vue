<template>
  <div>
    <h2>{{ $t('title.faq') }}</h2>
    <p>{{ $t('default.empty') }}</p>
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
