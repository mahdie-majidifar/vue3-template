<template>
  <div class="md:grid grid-cols-8 flex flex-col h-screen overflow-y-scroll">
    <div class="col-span-5 flex flex-col p-5">
      <HomeHeader/>
      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-4 my-5">
        <RunningCard v-for="(item , idx) in info" :key="idx" :data="item" class="col-span-1 row-span-1 rounded-xl"/>
      </div>
      <div class="grid grid-cols-1 md:grid-rows-1 grid-rows-3 md:grid-cols-3 gap-5 rounded-xl">
        <RunningResult v-for="(item,idx) in results" :key="idx" class="col-span-1">
          <component :is="item.component"/>
        </RunningResult>
      </div>
      <RunningFooter :data="runningFooterData" class="mt-5"/>
    </div>
    <div class="col-span-3 md:mx-auto mx-5 bg-secondary rounded-xl md:rounded-l-2xl p-5">
      <Calender/>
      <totalTime :data="totalTimeData"/>
      <div class="flex gap-3 mt-5">
        <div class="rounded-xl w-1/2 bg-primary">
          <runningChart/>
        </div>
        <div class="rounded-xl w-1/2 bg-primary">
          <runningChart/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import HomeHeader from '@/components/Home/header.vue'
import RunningCard from '@/components/Home/RuningCard.vue'
import RunningResult from '@/components/Home/RunningResult.vue'
import RunningFooter from '@/components/Home/RunningFooter.vue'
import Calender from '@/components/Home/Calender.vue'
import totalTime from '@/components/Home/totalTime.vue'
import runningChart from '@/components/Home/RunningChart.vue'

import {defineAsyncComponent, ref} from 'vue'
const info=ref([
  {
    title:'Time',
    value:'56m',
    icon:defineAsyncComponent(()=>import('@/components/icons/timer.vue')),
    color:'#f3eeeb'
  },
  {
    title: 'Total distance',
    value: '15 h 5km',
    icon: defineAsyncComponent(() => import('@/components/icons/road.vue')),
    color:'#e8dcf4'
  },
  {
    title:'Energy burn',
    value:'1345 kal',
    icon:defineAsyncComponent(()=>import('@/components/icons/fire.vue')),
    color:'#e2c4de'
  },
  {
    title:'Sleep',
    value:'56m',
    icon:defineAsyncComponent(()=>import('@/components/icons/moon.vue')),
    color:'#e7f4fc'
  },
])
const totalTimeData=ref(
    [{
      day:'Mon',
      percent:20
    },{
      day:'Tue',
      percent:67
    },{
      day:'Wed',
      percent:100
    },{
      day:'Thu',
      percent:43
    },{
      day:'Fri',
      percent:30
    },{
      day:'Sat',
      percent:15
    },{
      day:'Sun',
      percent:50
    },]
)
const results=ref([{
  component:defineAsyncComponent(()=>import('@/components/Home/runOverView.vue')),
},{
  component:defineAsyncComponent(()=>import('@/components/Home/runOverView.vue')),
},{
  component:defineAsyncComponent(()=>import('@/components/Home/RunningChart.vue')),
}])

const runningFooterData = ref({
  date:'9 july ,2022',
  walkingTime:'39'
})
</script>
