<script setup lang="ts">
import AppChevronBackIcon from '../icons/AppChevronDownIcon.vue';

</script>

<template>
  <button class="back-btn">
    <AppChevronBackIcon class="icon" />
    <div class="back-btn__text">
      Назад
    </div>
  </button>
</template>

<style lang="scss" scoped>
  .back-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: 52px;
    box-sizing: border-box;
    padding: 11px 13px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;

    .icon {
      transform: rotateZ(90deg);
    }

    &:hover {
      background: #F8F9FD;
    }

    &:active {
      color: #77A6FF;

      .icon {
        fill: #77A6FF;
      }
    }

    &__text {
      font-family: Inter;
      font-weight: 400;
      font-size: 20px;
      line-height: 24.2px;
      letter-spacing: 0%;
    }
  }
</style>
