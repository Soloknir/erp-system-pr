<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 56px;
  border-radius: 10px;
  border: none;
  background: #F5F5F5;
  color: #757D8A;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #77A6FF;
  }

  &:active {
    color: #ffffff;
    background: #548CF6;
  }
}
</style>
