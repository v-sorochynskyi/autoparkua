<template>
  <Swiper :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    navigation
    :pagination="{ clickable: true }"
    :thumbs="{ swiper: thumbsSwiper }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="h-[588px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[588px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[588px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[588px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[588px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
  </Swiper>

  <Swiper
    class="mt-3"
    :slides-per-view="4"
    :space-between="12"
    :modules="[Thumbs]"
    watch-slides-progress
    @slideChange="onSlideChange"
    @swiper="setThumbsSwiper"
  >
    <swiper-slide>
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[180px] w-[132px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[180px] w-[132px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[180px] w-[132px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
    <swiper-slide class="h-[180px] w-[132px]">
      <img src="@/assets/imgs/car-1.png" alt="Car">
    </swiper-slide>
  </Swiper>
</template>

<script setup lang="ts">
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

const modules = [Navigation, Pagination, Thumbs]
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>

<style scoped lang="scss">
:deep(.swiper-pagination) {
  .swiper-pagination-bullet {
    @apply bg-cinnabar;
  }
}

:deep(.swiper-button-next) {
  @apply text-white;
}

:deep(.swiper-button-prev) {
  @apply text-white;
}

</style>