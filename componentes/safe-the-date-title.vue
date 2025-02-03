<template>
  <div class="safe-the-date-title">
    <h1>
      <span>Save</span>
      <span>The</span>
      <span>Date</span>
    </h1>
  </div>
</template>

<style scoped lang="css">
.safe-the-date-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    font-family: "Whisper", serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;

    span {
      display: block;
      margin: 0;
      padding: 0;
      line-height: 1;
    }

    :nth-child(1) {
      font-size: 5rem;
    }

    :nth-child(2) {
      font-size: 4rem;
      font-weight: bold;
      line-height: 0.7;
    }

    :nth-child(3) {
      font-size: 7rem;
      line-height: 0.9;
    }
  }
}
</style>
