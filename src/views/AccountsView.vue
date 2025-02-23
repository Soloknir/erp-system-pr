<script setup lang="ts">
import WelcomeBackCard from '@/modules/accounts/components/WelcomeBackCard.vue'
import AccountsList from '@/modules/accounts/components/AccountsList.vue'
import AppSwitcher from '@/components/UI/AppSwitcher.vue';
import { useAuthStore } from '@/stores/auth.store';

const { savedAccounts } = useAuthStore();
</script>

<template>
  <main class="page-card">
    <WelcomeBackCard>
      <AccountsList :savedAccounts="savedAccounts" />
    </WelcomeBackCard>
    <AppSwitcher v-if="savedAccounts.length"/>
  </main>
</template>

<style lang="scss" scoped>
.page-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  margin: 55px;
  width: auto;
  height: calc(100vh - 110px);
  border-radius: 25px;
  background: #ffffff;
}
</style>
