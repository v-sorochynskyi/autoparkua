<template>
  <div class="w-full flex">
    <div class="flex-1 space-y-5">
      <SettingsItem :setting="{ key: 'Пробег', value: '180 000 км' }">
        <template #icon>
          <IconSpeedometer class="mr-3" />
        </template>
      </SettingsItem>
      <SettingsItem :setting="{ key: 'Объем двигателя', value: '2,7 л' }">
        <template #icon>
          <IconVolume class="mr-3" />
        </template>
      </SettingsItem>
      <SettingsItem :setting="{ key: 'Привод', value: 'Полный' }">
        <template #icon>
          <IconCar class="mr-3" />
        </template>
      </SettingsItem>
      <SettingsItem :setting="{ key: 'Лошадиные силы', value: '15' }">
        <template #icon>
          <IconHorse class="mr-3" />
        </template>
      </SettingsItem>
    </div>
    <div class="h-auto w-px bg-gray-light mx-[30px]"></div>
    <div class="flex-1 space-y-5">
      <SettingsItem :setting="{ key: 'Топливо', value: 'Бензин' }">
        <template #icon>
          <IconFuel class="mr-3" />
        </template>
      </SettingsItem>
      <SettingsItem :setting="{ key: 'Трансмиссия', value: 'Автомат' }">
        <template #icon>
          <IconTransmission class="mr-3" />
        </template>
      </SettingsItem>

      <SettingsItem :setting="{ key: 'Расход', value: '15л/100км' }">
        <template #icon>
          <IconConsumption class="mr-3" />
        </template>
      </SettingsItem>
      <SettingsItem :setting="{ key: 'ДТП', value: 'Без ДТП, не бито, не крашено' }">
        <template #icon>
          <IconHammer class="mr-3" />
        </template>
      </SettingsItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SettingsItem from '@/components/SettingsItem.vue'
import IconSpeedometer from '@/components/icons/IconSpeedometer.vue'
import IconVolume from '@/components/icons/IconVolume.vue'
import IconCar from '@/components/icons/IconCar.vue'
import IconHorse from '@/components/icons/IconHorse.vue'
import IconFuel from '@/components/icons/IconFuel.vue'
import IconTransmission from '@/components/icons/IconTransmission.vue'
import IconConsumption from '@/components/icons/IconConsumption.vue'
import IconHammer from '@/components/icons/IconHammer.vue'
</script>