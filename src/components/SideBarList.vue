<template>
  <ul class="flex flex-col grow mt-16 gap-6 container">
    <SidebarItems v-for="(item,idx) in list" :key="idx" :item="item" :class="{'mt-auto':idx + 1 == list.length}"/>
  </ul>
</template>
<script setup>
import {defineProps} from 'vue'

import SidebarItems from '@/components/SidebarItem.vue'

const props=defineProps({
  list:{
    required:true,
    type:Array
  }
})
</script>
