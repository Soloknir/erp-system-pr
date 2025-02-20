<script setup lang="ts">
defineProps<{
  type: 'text' | 'password' | 'number',
  title: string
  placeholder: string
}>();
</script>

<template>
  <div class="input__container">
    <label for="input-field" class="input__title">
      {{ title }}
    </label>
    <input name="input-field" class="input__field" :placeholder :type/>
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
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    letter-spacing: 0%;
    color: #666666;
  }

  &__field {
    width: 460px;
    padding: 16px 15px;
    border-radius: 12px;
    border: 1px solid #D5D5D6;
    cursor: pointer;

    &:hover,
    &:focus {
      border: 1px solid #9CBEFF
    }
  }
}
</style>
