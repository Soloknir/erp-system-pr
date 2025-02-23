<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import AccountCardLogin from './AccountCardLogin.vue';
import { useRouter } from 'vue-router';

const { login } = useAuthStore();
const router = useRouter();

const props = defineProps<{
  imageSrc: string;
  username: string;
  tabel: string;
  extended: boolean;
}>();

function handleLogin(password: string) {
  login({
    username: props.username,
    tabel: props.tabel,
    password
  },
  {
    callback: () => {
      router.push({ name: 'Home' })
    },
  })
}
</script>

<template>
  <div class="add-btn">
    <div class="add-btn__main">
      <img class="add-btn__avatar" :src="imageSrc" :alt="imageSrc" />
      <div class="add-btn__content">
        <div class="add-btn__content-title">
          {{ username }}
        </div>
        <div class="add-btn__content-tabel">
          {{ tabel }}
        </div>
      </div>
    </div>
    <AccountCardLogin v-if="extended" @login="handleLogin" />
  </div>
</template>

<style lang="scss" scoped>
.add-btn {
  padding: 0 25px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #ffffff80;
  cursor: pointer;

  &__main {
    display: flex;
    align-items: center;
    min-height: 90px;
    gap: 15px;
  }

  &__extended {
    display: flex;
    gap: 15px;
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid #77A6FF;
    flex-direction: column;
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 50%;
  }

  &__content {
    &-username {
      font-family: Inter;
      font-size: 18px;
      line-height: 21.78px;
    }

    &-tabel {
      color: #757D8A;
      font-family: Inter;
      font-size: 16px;
      line-height: 19.36px;
    }
  }
}
</style>
