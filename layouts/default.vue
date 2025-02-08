<template>
  <div class="layout-default">
    <header-container />

    <main>
      <slot />
    </main>

    <footer-container />
  </div>
</template>

<script setup>
import FooterContainer from "~/componentes/footer-container.vue";
import HeaderContainer from "~/componentes/header-container.vue";

</script>

<style scoped lang="css">
.layout-default {
  display: grid;
  grid-template-rows: auto 1fr min-content;
  margin: 0 auto;
  background-color: var(--primary);
  height: 100vh;
  height: 100dvh;

  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
  }
}
</style>
