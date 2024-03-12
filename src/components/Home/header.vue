<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <img src="/images/svg/location.svg">
      <span class="text-disabled text-sm">{{location}}</span>
    </div>
    <div class="flex items-center gap-2">
      <img src="/images/svg/bell.svg">
      <img src="/images/images.webp" class="rounded-full w-12 h-12"/>
    </div>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'

const props=defineProps({
  location:{
    default:'Seattle,United State'
  }
})
</script>