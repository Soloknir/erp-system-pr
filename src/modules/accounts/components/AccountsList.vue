<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { RouterLink } from 'vue-router'
import AccountAddBtn from './AccountAddBtn.vue'
import AccountCardBtn from './AccountCard.vue'
import type { IUser } from '@/types';

interface IAccount extends IUser {
  imageSrc: string,
}

const props = defineProps<{
  savedAccounts: IUser[]
}>();

const selectedAccount = ref<IAccount[] | null>(null)
const accountsListRef = useTemplateRef<HTMLElement>('accountsList')
const accounts = computed<IAccount[]>(() => props.savedAccounts.map(item => {
  return {
    ...item,
    imageSrc: '/images/stubs/avatar.avif'
  }
}));
const visibleAccounts = computed(() => selectedAccount.value ?? accounts.value);

function handleSelect(account: IAccount | null) {
  selectedAccount.value = account ? [account] : null;
}

onClickOutside(accountsListRef, () => handleSelect(null));
</script>

<template>
  <div class="accounts">
    <RouterLink to="/auth">
      <AccountAddBtn />
    </RouterLink>
    <div class="accounts__list">
      <TransitionGroup name="fade" ref="accountsList">
        <div v-for="account in visibleAccounts" :key="account.id">
          <AccountCardBtn
            :username="account.username"
            :tabel="account.tabel"
            :image-src="account.imageSrc"
            :extended="!!selectedAccount"
            @click="handleSelect(account)"
          />
        </div>
      </TransitionGroup>
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
