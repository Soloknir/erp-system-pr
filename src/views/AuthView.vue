<script setup lang="ts">
import AppInput from '@/components/UI/AppInput.vue';
import AppButton from '@/components/UI/AppButton.vue';
</script>

<template>
  <main class="container">
    <form class="auth-form">
      <h1>Вход в ERP-систему</h1>
      <AppInput type="number" placeholder="Введите табельный номер" title="Табельный номер" />
      <AppInput type="text" placeholder="Введите логин" title="Логин" />
      <AppInput type="password" placeholder="Введите пароль" title="Пароль" />
      <AppButton>Войти</AppButton>
    </form>
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 55px;
  width: auto;
  height: calc(100vh - 110px);
  border-radius: 25px;
  background: #ffffff;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 25px;

}
</style>
