<script setup lang="ts">
defineProps<{
  imageSrc: string;
  username: string;
  tabel: string;
}>();

</script>

<template>
  <div class="add-btn">
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
  cursor: pointer;

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
