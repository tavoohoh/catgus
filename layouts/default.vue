<template>
  <div class="layout-default">
    <div class="layout-default-content">
      <header>

      </header>

      <main>
        <slot />
      </main>

      <footer>
        <footer-container />
      </footer>
    </div>
  </div>
</template>

<script setup>
import FooterContainer from "~/componentes/footer-container.vue";

</script>

<style scoped lang="css">
.layout-default {
  background-color: var(--neutral-dark);
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  padding: 24px;

  .layout-default-content {
    display: grid;
    grid-template-rows: auto 1fr min-content;
    height: 100%;
    max-width: 512px;
    width: 100%;
    margin: 0 auto;
    background-color: var(--primary);
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);

    header {}

    main {}

    footer {}
  }
}
</style>
