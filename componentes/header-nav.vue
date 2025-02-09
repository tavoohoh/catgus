<template>
  <div class="header-nav-icon" @click="toggleNav">
    <menu-icon v-if="!navOpen" />
    <close-icon v-if="navOpen" />
  </div>

  <div class="header-nav-backdrop" :class="{ 'opened': dropOpen }" ref="backdrop" @click="toggleNav"></div>

  <nav class="header-nav" :class="{ 'opened': navOpen }">
    <div class="header-nav-top">
      <div>{{ $t('title.main') }}</div>
      <div>{{ $t('home.date') }}</div>
      <div>{{ $t('home.location') }} <br/>Colombia</div>
    </div>

    <div class="header-nav-item" v-for="item in navItems" :key="item.to">
      <nuxt-link :to="item.to" @click="toggleNav">{{ item.label }}</nuxt-link>
    </div>
  </nav>
</template>

<script setup>
// set if the nav is open or closed, default closed
import MenuIcon from "~/componentes/icons/menu-icon.vue";
import CloseIcon from "~/componentes/icons/close-icon.vue";

const navOpen = ref(false)
const dropOpen = ref(false)

const { $t } = useNuxtApp()

const backdrop = ref(null)

const toggleNav = () => {
  if (navOpen.value) {
    navOpen.value = false

    setTimeout(() => {
      dropOpen.value = false

      setTimeout(() => {
        backdrop.value.style.display = 'none'
      }, 100)
    }, 100)
  } else {
    backdrop.value.style.display = 'block'

    setTimeout(() => {
      dropOpen.value = true

      setTimeout(() => {
        navOpen.value = true
      }, 100)
    }, 10)
  }
}

const navItems = [
  { label: $t('title.home'), to: '/' },
  { label: $t('title.about'), to: '/about' },
  { label: $t('title.gift'), to: '/gifts' },
  { label: $t('title.dress'), to: '/dress-code' },
  { label: $t('title.crew'), to: '/crew' },
  { label: $t('title.todo'), to: '/todo' },
  { label: $t('title.schedule'), to: '/schedule' },
  { label: $t('title.faq'), to: '/faq' },
]

</script>

<style scoped lang="css">
.header-nav {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;

  * {
    transition: all 0.3s ease;
  }

  .header-nav-top {
    display: none;
  }

  .header-nav-item {
    a {
      text-decoration: none;
      color: var(--text-dark);
    }

    a.router-link-active {
      font-weight: bold;
    }

    a.router-link-active::after {
      display: block;
      content: '';
      width: 100%;
      height: 3px;
      margin-top: 3px;
      background-color: var(--neutral-dark);
    }
  }
}

.header-nav-backdrop {
  display: none;
  transition: all 0.3s ease;
  opacity: 0;
}

.header-nav-backdrop.opened {
  opacity: 1;
}

.header-nav.opened {
  right: 0;
}

.header-nav-icon {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .header-nav {
    flex-direction: column;
    justify-content: normal;
    align-items: start;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    background: var(--primary);
    width: 300px;
    padding: 4rem 1rem 1rem 3rem;
    transition: all 0.3s ease;

    .header-nav-top {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.3rem;
      margin-bottom: 3rem;

      div {
        font-weight: lighter;
      }

      div:nth-child(1) {
        font-weight: bold;
      }
    }

    .header-nav-item {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
  }

  .header-nav-backdrop {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100vw;
  }

  .header-nav-icon {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    background-color: var(--secondary);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
