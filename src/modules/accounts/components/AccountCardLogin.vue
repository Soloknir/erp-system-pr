<script setup lang="ts">
import AppButton from '@/components/UI/AppButton.vue';
import AppInput from '@/components/UI/AppInput.vue';
import { ref } from 'vue';

const emit = defineEmits(['login']);

const password = ref('');

function handleLogin() {
  emit('login', password.value);
}
</script>

<template>
  <div class="account-card-login">
    <AppInput type="password" title="Пароль" placeholder="Введите пароль" v-model="password"/>
    <AppButton @click="handleLogin">Войти</AppButton>
  </div>
</template>

<style lang="scss">
.account-card-login {
  display: flex;
  gap: 15px;
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #77A6FF;
  flex-direction: column;
}
</style>
