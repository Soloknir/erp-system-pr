<script setup lang="ts">
import AppBackButton from '@/components/UI/AppBackButton.vue';
import AppLogo from '@/components/UI/AppLogo.vue';
import AppSwitcher from '@/components/UI/AppSwitcher.vue';

import { AuthForm } from '@/modules/auth/components';
import { useAuthStore } from '@/stores/auth.store';

const { savedAccounts } = useAuthStore()
</script>

<template>
  <main class="page-card">
    <header class="page-card__header">
      <RouterLink to="/accounts">
        <AppBackButton class="back-btn" v-if="savedAccounts.length"/>
      </RouterLink>
      <AppLogo />
    </header>
    <div class="page-card__content">
      <AuthForm />
      <AppSwitcher v-if="savedAccounts.length"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page-card {
  display: flex;
  flex-direction: column;
  width: auto;
  height: calc(100vh - 110px);
  margin: 55px;
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
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
