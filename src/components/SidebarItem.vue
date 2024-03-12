<template>
  <a :href="item.link" class="flex items-center md:justify-start justify-center gap-2 hover:text-white text-disabled">
    <component :is="item.icon" class="w-6"/>
    <span class="md:block hidden">{{item.title}}</span>
  </a>
</template>
<script setup>
import {defineProps} from 'vue'

const props=defineProps({
  item:{
    required:true,
    type:Object
  }
})

</script>