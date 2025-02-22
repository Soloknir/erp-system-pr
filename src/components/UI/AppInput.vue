<script setup lang="ts">
import { computed, ref } from 'vue';
import AppEyeIcon from '../icons/AppEyeIcon.vue';
import AppBlindEyeIcon from '../icons/AppBlindEyeIcon.vue';

const props = defineProps<{
  type?: 'text' | 'password'
  title: string
  placeholder: string
}>()

const model = defineModel();
const isPasswordVisible = ref(false);

const isPassword = computed(() => props.type === 'password')

function changePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}
</script>

<template>
<div class="input__container">
  <label for="input-field" class="input__title">
    {{ title }}

    <div v-if="isPassword" @click="changePasswordVisibility">
      <AppEyeIcon v-if="isPasswordVisible" />
      <AppBlindEyeIcon v-else />
    </div>
  </label>
  <input
    name="input-field"
    class="input__field"
    :placeholder
    :type="isPasswordVisible ? 'text' : type"
    autocomplete="new-password"
    v-model="model"
  />
</div>
</template>

<style lang="scss" scoped>
.input {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 27px;
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    letter-spacing: 0%;
    color: #666666;
    cursor: pointer;
  }

  &__field {
    width: -webkit-fill-available;
    padding: 16px 15px;
    border-radius: 12px;
    border: 1px solid #d5d5d6;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
      border: 1px solid #9cbeff;
    }
  }
}
</style>
