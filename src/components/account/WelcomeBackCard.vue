<script setup lang="ts">
</script>

<template>
  <div class="card">
    <div class="card__header">
      <img class="card__header-logo" src="/public/images/logo.svg" alt="logo-image"/>
      <div class="auth-text">
        Вход в ERP-систему
      </div>
      <div class="welcome-text">
        С возвращением! 👋
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 725px;
  padding: 40px 0;

  border-radius: 25px;
  background: linear-gradient(213.61deg, #A1C2FF 3.13%, #75A3FB 46.43%, #4781EE 92.74%);

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &-logo {
      width: 60px;
      height: 60px;
    }
  }
}

.welcome-text {
  font-family: Inter;
  font-weight: 600;
  font-size: 40px;
  line-height: 48.41px;
  letter-spacing: 0%;
  color: #ffffff
}

.auth-text {
  font-family: Inter;
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff
}

</style>
