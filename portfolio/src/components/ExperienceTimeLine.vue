<script setup>

import Responsibility from "@/components/icons/Responsibility.vue";

</script>
 
<template>
<!-- component -->
<div class="flex justify-between m-6">
  <div class="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
          <slot name="image"></slot>
          <div class="flex justify-between -mt-4 px-4">
            <span
              class="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
              > <slot name="type"></slot></span
            >
            <span
              class="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-blue-500 font-semibold text-xs">
                <slot name="year"></slot>
              </p>
            </span>
          </div>
          <div class="py-2 px-4">
            <h1
              class="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
            >
              <a href="#"><slot name="header"></slot></a>
            </h1>
          </div>
          <div class="px-4 space-y-2">
            <p class="text-gray-400 font-normal leading-5 tracking-wide">
              <slot name="description"></slot>
            </p>
            
          </div>
          <div class="flex flex-row items-end h-full w-full px-4 mt-4">
            <div class="flex border-t border-gray-700 w-full py-4">
              <div
                class="flex items-center space-x-3 border-r border-gray-700 w-full"
              >
            
                <div >
                  
                  <p class="flex flex-row text-l font-light tracking-wider text-gray-300 items-center gap-2">
                    <Responsibility /> <slot name="responsibilities"></slot>
                  </p>
                </div>
              </div>
              <div class="flex items-center flex-shrink-0 px-2">
                <div class="flex items-center space-x-1 text-gray-400">
                  
                  <p class="font-medium"> <slot name="github"></slot></p>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
</template>
 
<style scoped>

</style>