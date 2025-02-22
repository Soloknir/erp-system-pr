<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AccountAddBtn from './AccountAddBtn.vue'
import AccountCardBtn from './AccountCardBtn.vue';
</script>

<template>
  <div class="accounts">
    <RouterLink to="/auth">
      <AccountAddBtn />
    </RouterLink>
    <div class="accounts__list">
      <AccountCardBtn username="Иванова И.И." tabel="001" image-src="/public/images/stubs/avatar.avif" />
      <AccountCardBtn username="Иванова И.И." tabel="002" image-src="/public/images/stubs/avatar.avif" />
      <AccountCardBtn username="Иванова И.И." tabel="003" image-src="/public/images/stubs/avatar.avif" />
      <AccountCardBtn username="Иванова И.И." tabel="001" image-src="/public/images/stubs/avatar.avif" />
      <AccountCardBtn username="Иванова И.И." tabel="002" image-src="/public/images/stubs/avatar.avif" />
      <AccountCardBtn username="Иванова И.И." tabel="003" image-src="/public/images/stubs/avatar.avif" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accounts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 469px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 360px;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
