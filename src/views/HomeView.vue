<script setup lang="ts">
import AppButton from '@/components/UI/AppButton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';

const { logout } = useAuthStore();
const router = useRouter();

function handleLogout() {
  logout(router);
}
</script>

<template>
  <main class="container">
    <h1>
      Вы авторизованы!
    </h1>
    <AppButton class="logout-btn" @click="handleLogout">
      Выйти?
    </AppButton>
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 55px;
  width: auto;
  height: calc(100vh - 110px);
  border-radius: 25px;
  background: #ffffff;
}

.logout-btn {
  width: 300px;
}
</style>
