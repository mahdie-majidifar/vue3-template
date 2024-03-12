<template>
  <div class="flex flex-col">
    <div class="w-full flex justify-between items-center">
      <div class="flex flex-col gap-5">
        <span class="text-white text-2xl">Activity tracking</span>
        <span class="text-white">{{`${days[selectedDate].name} , ${calcDay(selectedDate +1)}`}}</span>
      </div>
      <button @click="nextWeek" class="w-12 h-12 pb-1 rounded-xl border border-disabled text-white text-xl">
        <span class="m-auto">+</span>
      </button>
    </div>
    <div class="grid grid-cols-7 gap-1 text-white mt-5">
      <div class="col-span-1 text-xl rounded-lg hover:bg-disabled cursor-pointer p-2 flex flex-col gap-2 items-center" v-for="(day,idx) in days" :key="idx"
        :class="{'bg-disabled' : selectedDate==idx}" @click="selectedDate=idx">
        <span>{{day.abs}}</span>
        <span v-if="calcDay(idx + 1) <= 30">{{calcDay(idx + 1)}}</span>
      </div>
    </div>
    <LineChart class="my-8"/>
  </div>
</template>
<script setup>
import LineChart from "@/components/Home/lineChart.vue";

import {ref,computed} from "vue";
const currentWeek=ref(0)
const selectedDate=ref(3)
const days=ref([{
  abs:'Mon',
  name:'Monday'
},{
  abs:'Tue',
  name:'Tuesday'
},{
  abs:'Wed',
  name:'Wednesday'
},{
  abs:'Thu',
  name:'Thursday'
},{
  abs:'Fri',
  name:'Friday'
},{
  abs:'Sat',
  name:'Saturday'
},{
  abs:'Sun',
  name:'Sunday'
},])


const nextWeek=computed(()=>{
  if(currentWeek.value >= 4) resetCurrentWeek()
  else currentWeek.value++
})
const resetCurrentWeek=()=>{
  currentWeek.value=0
}
const calcDay=(idx)=>{
 return (currentWeek.value * 7) + idx
}
</script>