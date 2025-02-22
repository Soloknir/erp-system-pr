<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { RouterLink } from 'vue-router'
import AccountAddBtn from './AccountAddBtn.vue'
import AccountCardBtn from './AccountCard.vue'

interface IAccount {
  id: string,
  username: string,
  tabel: string,
  imageSrc: string
}

const selectedAccount = ref<IAccount[] | null>(null)
const accountsListRef = useTemplateRef<HTMLElement>('accountsList')

const accounts: IAccount[] = [
  { id: '1', username: 'Иванова И.И.', tabel: '001', imageSrc: '/images/stubs/avatar.avif' },
  { id: '2', username: 'Иванова И.И.', tabel: '002', imageSrc: '/images/stubs/avatar.avif' },
  { id: '3', username: 'Иванова И.И.', tabel: '003', imageSrc: '/images/stubs/avatar.avif' },
  { id: '4', username: 'Иванова И.И.', tabel: '004', imageSrc: '/images/stubs/avatar.avif' },
  { id: '5', username: 'Иванова И.И.', tabel: '005', imageSrc: '/images/stubs/avatar.avif' },
  { id: '6', username: 'Иванова И.И.', tabel: '006', imageSrc: '/images/stubs/avatar.avif' },
  { id: '7', username: 'Иванова И.И.', tabel: '007', imageSrc: '/images/stubs/avatar.avif' },
  { id: '8', username: 'Иванова И.И.', tabel: '008', imageSrc: '/images/stubs/avatar.avif' },
  { id: '9', username: 'Иванова И.И.', tabel: '009', imageSrc: '/images/stubs/avatar.avif' },
];

const visibleAccounts = computed(() => selectedAccount.value ?? accounts);

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
