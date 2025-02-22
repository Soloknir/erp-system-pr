<template>
  <div class="remember">
    <input type="checkbox" name="remember" class="remember__checkbox" />
    <label for="remember"  class="remember__label">
      Запомнить аккаунт
    </label>
  </div>
</template>

<style lang="scss" scoped>
.remember {
  display: flex;
  align-items: center;
  gap: 10px;

  &__checkbox {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background: #77A6FF;
    background-color: white;
    vertical-align: middle;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  &__label {
    font-weight: 400;
    font-size: 18px;
  }
}
</style>
