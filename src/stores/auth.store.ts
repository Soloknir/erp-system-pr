
import useApi from '@/api/composables/use-api';
import { RoutesIds } from '@/enums/router';
import type { ILoginDto, ILoginOptions, IUser } from '@/types';
import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia'
import { computed } from 'vue';
import type { Router } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const accessTokenRef = useStorage('access_token', '');
  const savedAccountsRef = useStorage<IUser[]>('savedAccounts', []);
  const isAuthenticated = computed(() => Boolean(accessTokenRef.value));

  async function login(signInDto: ILoginDto, {
    remember = false,
    callback
  }: ILoginOptions) {
    const api = useApi();

    await api.auth.login(signInDto)
      .then(({ data, error }) => {
        if (error && error.value) {
          throw new Error(error.value);
        }

        const { user, accessToken } = JSON.parse(data.value as string);

        accessTokenRef.value = JSON.stringify(accessToken);

        if (callback) {
          callback()
        }

        if (remember) {
          const savedAccounts: IUser[] = savedAccountsRef.value;

          if (savedAccounts.findIndex(({ id }) => id === user.id) < 0) {
            savedAccounts.push(user);
          }

          savedAccountsRef.value = savedAccounts.map((item) => ({
            id: item.id,
            tabel: item.tabel,
            username: item.username,
          }))
        }
      })
      .catch(() => {
        alert('Не удалось авторизоваться!')
      })
  }

  function logout(router: Router) {
    accessTokenRef.value = JSON.stringify('');
    router.push({ name: RoutesIds.ACCOUNTS })
  }

  return {
    login,
    logout,
    isAuthenticated,
    savedAccounts: savedAccountsRef
  }
})

