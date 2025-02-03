<template>
  <div class="layout-default">
    <header>

    </header>

    <main>
      <slot />
    </main>

    <footer>
      <footer-container />
    </footer>
  </div>
</template>

<script setup>
import FooterContainer from "~/componentes/footer-container.vue";

</script>

<style scoped lang="css">
.layout-default {
  display: grid;
  grid-template-rows: auto 1fr min-content;
  height: 100vh;

  header {}

  main {}

  footer {}
}
</style>
