<script setup lang="ts">
import WelcomeBackCard from '@/modules/accounts/components/WelcomeBackCard.vue'
import AccountsList from '@/modules/accounts/components/AccountsList.vue'
</script>

<template>
  <main class="page-card">
    <WelcomeBackCard>
      <AccountsList />
    </WelcomeBackCard>
  </main>
</template>

<style lang="scss" scoped>
.page-card {
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

</style>
