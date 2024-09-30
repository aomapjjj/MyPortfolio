<script setup>

</script>
 
<template>
<div>
    <button class="relative inline-block font-medium group py-1.5 px-2.5 ">
      <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-gray-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full bg-white border border-black group-hover:bg-indigo-50"></span>
      <span class="relative text-black "><slot></slot></span>
      </button>
</div>
</template>
 
<style scoped>

</style>