<script setup lang="ts">
import AppInput from '@/components/UI/AppInput.vue'
import AppButton from '@/components/UI/AppButton.vue'
import AppRemember from '@/components/UI/AppRemember.vue'
import AppCombobox from '@/components/UI/AppCombobox.vue'

import { useUserNames } from '@/composables/use-user-names'
import { useUserTabels } from '@/composables/use-user-tabels'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const { userNames, getUserNames } = useUserNames()
const { userTabels, getUserTabels } = useUserTabels()
const { login } = useAuthStore()
const router = useRouter()

Promise.all([getUserNames(), getUserTabels()])

const formValues = ref({
  tabel: '',
  username: '',
  password: '',
  remember: true,
})

async function handleSubmit() {
  await login(
    {
      tabel: formValues.value.tabel,
      username: formValues.value.username,
      password: formValues.value.password,
    },
    {
      remember: formValues.value.remember,
      callback: () => {
        router.push({ name: 'Home' })
      },
    },
  )
}
</script>

<template>
  <form class="auth-form" @submit.prevent="handleSubmit">
    <h1>Вход в ERP-систему</h1>
    <AppCombobox
      placeholder="Введите табельный номер"
      title="Табельный номер"
      :items="userTabels"
      v-model="formValues.tabel"
    />
    <AppCombobox
      placeholder="Введите логин"
      title="Логин"
      :items="userNames"
      v-model="formValues.username"
    />
    <AppInput
      type="password"
      placeholder="Введите пароль"
      title="Пароль"
      v-model="formValues.password"
    />
    <AppRemember v-model="formValues.remember" />
    <AppButton>Войти</AppButton>
  </form>
</template>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
