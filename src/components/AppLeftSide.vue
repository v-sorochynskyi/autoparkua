<template>
  <div class="w-[780px] font-base shrink-0">
    <div class="flex flex-col w-full">
      <div class="w-full">
        <AppSlider />
      </div>

      <AppSettings class="mt-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSlider from '@/components/AppSlider.vue'
import AppSettings from '@/components/AppSettings.vue'
</script>