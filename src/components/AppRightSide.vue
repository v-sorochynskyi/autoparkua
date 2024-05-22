<template>
  <div class="font-bold flex-auto">
    <div class="flex items-center justify-between">
      <h2 class="font-bold uppercase text-2xl">Ford Edge 2016</h2>
      <div class="flex items-center space-x-1">
        <button class="w-6 h-6 flex items-center justify-center">
          <ShareIcon class="w-[18px] h-4" />
        </button>
        <button class="w-6 h-6 flex items-center justify-center">
          <BookmarkIcon />
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <span class="text-chinese-black-light">Код товару:</span>
      <span>Львів</span>
    </div>

    <CurrencyToggle class="mt-5" />

    <h2 class="font-extrabold text-2xl mt-3">62 490 USD</h2>

    <p class="text-lg">від 511$/міс</p>
    <p class="text-chinese-black-light text-sm mt-3">
      *Ежемесячный платеж носит информационный характер и может меняться на момент получения детального расчета <br>
      *Возможна оплата криптовалютой
    </p>

    <div class="h-px bg-gray-light my-3"></div>

    <div class="flex flex-wrap gap-3">
      <AppTag>Все авто</AppTag>
      <AppTag>Официальное авто</AppTag>
      <AppTag>Авто с Европы</AppTag>
    </div>

    <p class="text-chinese-black-light text-lg mt-3 leading-normal">
      Опубликовано 14.12.2023
    </p>

    <div class="h-px bg-gray-light my-5"></div>

    <v-btn variant="tonal" class="main-button w-full">
      <PhoneIcon class="mr-1" />
      Показать телефон
    </v-btn>

    <div class="h-px bg-gray-light my-5"></div>

    <div>
      <p class="font-bold text-lg">Заказать услугу</p>
      <div class="flex flex-wrap gap-3 mt-3">
        <v-btn variant="outlined" class="button-outlined w-[184px]">
          <IconCarBlack class="mr-1" />
          Тест драйв
        </v-btn>
        <v-btn variant="outlined" class="button-outlined w-[184px]">
          <IconExchange class="mr-1" />
          Trade in
        </v-btn>
        <v-btn variant="outlined" class="button-outlined w-[184px]">
          Онлайн просмотр
        </v-btn>
        <v-btn variant="outlined" class="button-outlined w-[184px]">
          Доставка
        </v-btn>
      </div>
    </div>

    <div class="h-px bg-gray-light my-5"></div>

    <div>
      <p class="font-bold text-lg">Заказать проверку</p>
      <div class="flex flex-wrap gap-3 mt-3">
        <v-btn variant="outlined" class="button-outlined w-[184px]">
          СarVertical
        </v-btn>
        <v-btn variant="outlined" class="button-outlined w-[184px]">
          Autopark.ua
        </v-btn>
      </div>

      <v-btn variant="tonal" class="main-button w-full mt-3">
        Полная проверка авто
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppTag from '@/components/AppTag.vue'
import CurrencyToggle from '@/components/CurrencyToggle.vue'
import ShareIcon from '@/components/icons/IconShare.vue'
import PhoneIcon from '@/components/icons/IconPhone.vue'
import IconCarBlack from '@/components/icons/IconCarBlack.vue'
import IconExchange from '@/components/icons/IconExchange.vue'
import BookmarkIcon from '@/components/icons/IconBookmark.vue'
</script>