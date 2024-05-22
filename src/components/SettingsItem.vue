<template>
  <div class="flex items-center justify-between">
    <div class="flex">
      <slot name="icon" class="mr-3"/>
      <span class="text-chinese-black-light">{{ setting.key }}:</span>
    </div>
    <div>{{ setting.value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  setting: {key: string; value: string}
}>()
</script>