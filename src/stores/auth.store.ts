
import useApi from '@/api/composables/use-api';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(!!localStorage.getItem('access_token'))

  async function login(signInDto: { tabel: string, username: string, password: string }) {
    const api = useApi();

    api.auth.login(signInDto)
      .then(({ data }) => {
        const accessToken = JSON.parse(data.value as string)['access_token'];

        localStorage.setItem('access_token', JSON.stringify(accessToken));
        isAuthenticated.value = true;
      })
      .catch((error) => {
        console.error('[BLOG CATEGORIES]:', error)
      });
  }

  function logout() {
    isAuthenticated.value = false;
    localStorage.removeItem('access_token');
  }

  return {
    login,
    logout,
    isAuthenticated
  }
})

