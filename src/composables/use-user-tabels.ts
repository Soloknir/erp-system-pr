import useApi from '@/api/composables/use-api'
import { ref } from 'vue'

export function useUserTabels() {
  const api = useApi()
  const userTabels = ref<string[]>([])

  async function getUserTabels() {
    await api.users
      .getUserTabels()
      .then(({ data }) => {
        userTabels.value = JSON.parse(data.value as string) as string[] || [];
      })
      .catch((error) => {
        console.error('[USERS_NAMES]:', error)
      })
  }

  return {
    userTabels,
    getUserTabels
  }
}
