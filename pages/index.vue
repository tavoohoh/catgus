<template>
  <div class="home">
<!--    <div class="flower-one"></div>-->
<!--    <div class="flower-two"></div>-->

    <h2>{{ $t('title.save') }}</h2>

    <h3 class="us">
      <span>Catalina <br/> Mercado Jaspe</span>
      <span>&</span>
      <span>Gustavo <br/> Santamaría Guevara</span>
    </h3>

    <div class="date">{{ $t('home.date') }}</div>
    <div class="location">{{ $t('home.location') }}<br/>Colombia</div>
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
.home {
  h2 {
    margin: 0 auto;
    text-transform: uppercase;
    line-height: 1.3;
    font-size: 3rem;
    letter-spacing: 0.4rem;
    z-index: 2;
  }

  .us {
    margin: 4rem auto;
    font-size: 1.8rem;

    span {
      font-family: "Bodoni Moda SC", serif;
      display: block;
      text-align: center;
      line-height: 1.4;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
    }

    span:nth-child(2) {
      font-family: var(--font-elegant), sans-serif;
      margin: 1.7rem 0;
    }
  }

  .date {
    font-family: var(--font-elegant), sans-serif;
    text-align: center;
    font-size: 1.3rem;
    margin-top: 3rem;
  }

  .location {
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
}

.flower-one,
.flower-two {
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
}

.flower-one {
  background-image: url("assets/images/f1.png");
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  background-position: left;
}

.flower-two {
  background-image: url("assets/images/f2.png");
  width: 300px;
  height: 300px;
  position: absolute;
  right: 0;
  background-position: right;
}
</style>
