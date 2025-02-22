<script setup lang="ts">
import AppBackButton from '@/components/UI/AppBackButton.vue';
import AppLogo from '@/components/UI/AppLogo.vue';
import { AuthForm } from '@/modules/auth/components';
</script>

<template>
  <main class="page-card">
    <header class="page-card__header">
      <RouterLink to="/accounts">
        <AppBackButton class="back-btn" />
      </RouterLink>
      <AppLogo />
    </header>
    <div class="page-card__content">
      <AuthForm />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page-card {
  margin: 55px;
  width: auto;
  height: calc(100vh - 110px);
  border-radius: 25px;
  background: #ffffff;

  &__header {
    display: flex;
    padding: 50px;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
