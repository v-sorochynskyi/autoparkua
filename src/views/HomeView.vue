<template>
  <main class="h-full flex flex-col w-full max-w-[1220px] mx-auto p-5">
    <div class="flex space-x-5">
      <AppLeftSide />
      <AppRightSide />
    </div>
  </main>
</template>

<script lang="ts" setup>
import AppLeftSide from '@/components/AppLeftSide.vue'
import AppRightSide from '@/components/AppRightSide.vue'
</script>
