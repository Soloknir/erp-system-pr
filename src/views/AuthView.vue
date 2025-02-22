<script setup lang="ts">
import WelcomeBackCard from '@/components/account/WelcomeBackCard.vue'
import AccountsList from '@/components/account/AccountsList.vue'
</script>

<template>
  <main class="container">
    <WelcomeBackCard>
      <AccountsList />
    </WelcomeBackCard>
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

</style>
