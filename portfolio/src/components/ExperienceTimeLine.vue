<script setup>

import Responsibility from "@/components/icons/Responsibility.vue";

</script>
 
<template>
   <div class=" bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300">
       
        <h2 class="text-xl font-semibold mb-4"><slot name="header"></slot></h2>
        <p class="text-gray-700"><slot name="description"></slot></p>
        <p class="text-gray-700"><slot name="responsibility"></slot></p>
        <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
          
        </div>
      </div>
   
</template>
 
<style scoped>

</style>