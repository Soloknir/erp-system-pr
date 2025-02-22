<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import AppInput from './AppInput.vue'
import { onClickOutside } from '@vueuse/core';

const container = useTemplateRef<HTMLElement>('container')

const props = defineProps<{
  items: string[]
  title: string
  placeholder: string
}>()

const model = defineModel({ default: '' })
const isInputFocused = ref(false)

const filteredItems = computed(() =>
  props.items.filter((item) => item.indexOf(model.value) > -1),
)
const showDropdown = computed(() => isInputFocused.value && filteredItems.value.length)

function handleFocusChanged(value: boolean): void {
  isInputFocused.value = value
}

function selectDropdownItem(value: string): void {
  model.value = value;
  handleFocusChanged(false);
}

onClickOutside(container, () => handleFocusChanged(false));
</script>

<template>
  <div class="combo-box" ref="container">
    <AppInput
      type="text"
      :title
      :placeholder
      v-model="model"
      @focusin="handleFocusChanged(true)"
    />
    <div class="dropdown">
      <div width="100%" />
      <div class="dropdown__list" v-if="showDropdown">
        <div
          v-for="item in filteredItems"
          :key="item"
          class="dropdown__list-item"
          @click="selectDropdownItem(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.combo-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown {
  position: relative;
  width: 100%;

  &__list {
    position: absolute;
    width: auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #9cbeff;
    z-index: 1000;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;

    &-item {
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #f2f7ff;
      }
    }
  }
}
</style>
