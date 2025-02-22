
import useApi from '@/api/composables/use-api';
import { defineStore } from 'pinia'
import { ref } from 'vue';

interface IUser {
  tabel: string;
  name: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser[]>([])

  async function login(signInDto: { tabel: string, username: string, password: string }) {
    const api = useApi();

    await api.auth.login(signInDto);

    localStorage.setItem('user', JSON.stringify(user));
  }

  function logout() {
    localStorage.removeItem('user');
  }

  return {
    login,
    logout
  }
})

