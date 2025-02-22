import useApi from '@/api/composables/use-api'
import { ref } from 'vue'

export function useUserNames() {
  const api = useApi()
  const userNames = ref<string[]>([])

  async function getUserNames() {
    await api.users
      .getUserNames()
      .then(({ data }) => {
        userNames.value = JSON.parse(data.value as string) as string[] || [];
      })
      .catch((error) => {
        console.error('[USERS_NAMES]:', error)
      })
  }

  return {
    userNames,
    getUserNames
  }
}
