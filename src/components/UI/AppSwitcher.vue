<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { RoutesIds } from '@/enums/router'

const initialSteps: RoutesIds[] = [RoutesIds.ACCOUNTS, RoutesIds.AUTH]

const router = useRouter()
const route = useRoute()

const steps = computed(() =>
  initialSteps.map((id) => {
    return {
      id,
      classes: ['switcher__step', { switcher__step_active: route.name === id }],
      callback: () => router.push({ name: id }),
    }
  }),
)
</script>

<template>
  <div class="switcher">
    <button v-for="step in steps" :key="step.id" :class="step.classes" @click="step.callback" />
  </div>
</template>

<style lang="scss">
.switcher {
  display: flex;
  flex-direction: row;
  gap: 12px;

  &__step {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #d5d5d6;
    border: none;
    cursor: pointer;

    &_active {
      background: #77a6ff;
    }
  }
}
</style>
