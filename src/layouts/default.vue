<template>
  <div class="grid grid-cols-10 w-full">
    <div class="flex flex-col py-10 items-center md:justify-start justify-center bg-secondary md:col-span-2 col-span-1 h-screen rounded-r-2xl pt-14 md:px-5">
      <img src="/images/svg/logoipsum.svg" class="w-10 h-10 mx-auto">
      <SideBarList :list="pagesList"/>
    </div>
    <router-view class="bg-basic col-span-9 md:col-span-8"/>
  </div>
</template>
<script setup>
import SideBarList from '@/components/SideBarList.vue'

import {ref,defineAsyncComponent} from "vue";

const pagesList=ref([
    {
      title:'Overview',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/home.vue'))
    },
    {
      title:'Competition',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/timer.vue'))
    },
    {
      title:'Timer',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/timer.vue'))
    },
    {
      title:'Energy',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/battery.vue'))
    },
    {
      title:'Calender',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/calender.vue'))
    },
    {
      title:'Distances',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/road.vue'))
    },
    {
      title:'Profile',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/user.vue'))
    },
    {
      title:'Setting',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/setting.vue'))
    },
    {
      title:'LogOut',
      link:'#',
      icon:defineAsyncComponent(()=>import('@/components/icons/logout.vue'))
    },
])
</script>