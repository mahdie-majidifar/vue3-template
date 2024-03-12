<template>
  <div class="w-full bg-primary gap-2 flex flex-col text-white rounded-xl p-5">
    <div class="flex items-center gap-2">
      <timer class="w-7 h-7"/>
      <span class="text-xl">Total time</span>
    </div>
    <span class="pl-9 text-2xl mb-3">2 h 45 m</span>
    <div class="w-full flex justify-between px-5 gap-1 h-24">
      <div class="flex flex-col gap-1 items-center" v-for="(day,idx) in data" :key="idx">
        <div class="h-20 bg-secondary flex rounded w-2 items-end">
          <div :style="`height : ${day.percent}%`" class="bg-white w-full rounded"></div>
        </div>
        <span>{{day.day}}</span>

      </div>
    </div>
  </div>
</template>
<script setup>
import Timer from "@/components/icons/timer.vue";

import {defineProps} from 'vue'

const props=defineProps({
  data:{
    required:true,
    type:Object
  }
})
</script>