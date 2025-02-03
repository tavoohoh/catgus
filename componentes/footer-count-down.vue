<template>
  <p class="footer-count-down">
    {{ remainingTimeFormatted }}
  </p>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const eventDate = new Date('2026-02-20T16:00:00-05:00')

const calculateRemainingTime = () => {
  const currentDate = new Date()
  return eventDate - currentDate
}

const remainingTime = ref(calculateRemainingTime())

const remainingTimeFormatted = computed(() => {
  const time = remainingTime.value
  const days = Math.floor(time / (1000 * 60 * 60 * 24))
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((time % (1000 * 60)) / 1000)

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return '¡Gracias a todos!'
  } else if (days === 0 && hours === 0 && minutes === 0) {
    return `¡Faltan ${seconds} segundos!`
  } else if (days === 0 && hours === 0) {
    return `¡Faltan ${minutes} minutos y ${seconds} segundos!`
  } else if (days === 0) {
    return `¡Faltan ${hours} horas, ${minutes} minutos y ${seconds} segundos!`
  }

  return `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
})

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    remainingTime.value = calculateRemainingTime()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped lang="css">
.footer-count-down {
  text-align: center;
  font-size: 1rem;
}
</style>
