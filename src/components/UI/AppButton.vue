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
  border: 1px solid #D5D5D6;
  background: #F5F5F5;
  color: #757D8A;
  cursor: pointer;
}
</style>
