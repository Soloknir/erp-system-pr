<script setup lang="ts">
import AppPlusIcon from '@/components/icons/AppPlusIcon.vue'
</script>

<template>
  <div class="add-btn">
    <div class="add-btn__icon">
      <AppPlusIcon />
    </div>

    <div class="add-btn__text">
      Добавить аккаунт
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 25px;
  height: 90px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #ffffff80;
  backdrop-filter: blur(30px);
  cursor: pointer;


  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 50%;
  }

  &__text {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
  }
}
</style>
