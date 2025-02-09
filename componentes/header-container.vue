<template>
  <header class="header-container">
    <div class="header-container-top" style="display: none">
      <div>{{ $t('home.date') }}</div>
      <div>{{ $t('home.location') }}, Colombia</div>
      <div><footer-hashtag /></div>
    </div>

    <h1 class="header-container-title">
      <span class="divider"></span>
      {{ $t('title.main') }}
      <span class="divider"></span>
    </h1>

    <header-nav />
  </header>
</template>

<script setup>
import HeaderNav from "~/componentes/header-nav.vue";
import FooterHashtag from "~/componentes/footer-hashtag.vue";

const { $t } = useNuxtApp()

</script>

<style scoped lang="css">
.header-container {
  padding: 1rem 3rem;

  h1 {
    width: max-content;
    margin: 0 auto;
  }

  .header-container-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

    div, div * {
      font-size: 0.8rem;
    }

    div:nth-child(1) {
      text-align: left;
    }

    div:nth-child(3) {
      text-align: right;
    }
  }
}

@media screen and (max-width: 1024px) {
  .header-container-top {
    display: none!important;
  }
}
</style>
