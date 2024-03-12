<template>
  <div class="w-full rounded-xl bg-secondary p-5">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="flex gap-2 flex-col">
          <div class="flex items-center gap-2">
            <img src="/images/images.webp" class="rounded-full w-12 h-12"/>
            <span class="text-white text-lg">Running with Kate</span>
          </div>
          <div class="flex items-center gap-2">
            <Calender class="text-white"/>
            <span class="text-disabled">{{data.date}}</span>
          </div>
        </div>
      </div>
      <router-link to="#" class="w-40 flex items-center justify-center text-white bg-disabled rounded-full h-10">View more</router-link>
    </div>
    <div class="flex flex-col w-full items-center justify-center mt-5 gap-5 relative">
      <div class="w-80 rounded-t-full absolute bottom-16 mx-auto border-t border-dashed border-white h-40"></div>
      <img src="/images/svg/shoe.svg" class="w-16 h-16">
      <div class="flex flex-col items-center justify-center pt-8 gap-5 z-10 bg-secondary w-full border-t-2 border-disabled my-2">
        <span class="text-disabled text-lg">Double walking time</span>
        <span class="text-xl text-white">{{`${data.walkingTime} m`}}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Calender from '@/components/icons/calender.vue'

import{defineProps} from 'vue'

const props=defineProps({
  data:{
    type:Object,
    request:true
  }
})
</script>