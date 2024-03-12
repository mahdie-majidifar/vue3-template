<template>
  <div class="flex flex-col items-center justify-center p-5 gap-1.5" :style="`background-color : ${data.color}`">
    <component :is="data.icon" class="text-black w-7 h-7"/>
    <span class="text-sm">{{data.title}}</span>
    <span class="text-xl font-bold">{{data.value}}</span>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'

const props=defineProps({
  data:{
    required:true,
    type:Object
  }
})
</script>