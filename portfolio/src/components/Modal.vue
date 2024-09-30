<script setup>
import {ref, watch } from 'vue'
import experiences from "../../data/experiences.json"

const experienceObj = ref()

const emit = defineEmits(['close'])
const props = defineProps({
    isModalOpen : Boolean,
    projectId : String
})

const getItemById = (id) => {
    return experiences.find(experience => experience.Id === id)
}




watch(
  () => props.projectId,(newValue) => {
    const item =  getItemById(newValue)
    experienceObj.value = item
  }
)



const closeModal = () => {
  emit('close') 
}
</script>
<template>
  <div v-if="isModalOpen"
    class="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50"
  >
    <div class="flex justify-center items-center min-h-screen w-full max-w-3xl">
      <div class="max-w-[720px] mx-auto">
        <!-- Centering wrapper -->
        <div
          class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
        >
          <div
            class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl "
          >
           <img :src="experienceObj.img" >
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <p
                class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
              >
               {{ experienceObj.name }}
              </p>
            </div>
            <p
              class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"
            >
            {{ experienceObj.description }}
            </p>
            
            <p
              class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 mt-4  break-words hover:text-red-500"
            >
            <a :href="experienceObj.website"  target="_blank" >
              {{ experienceObj.website }}
            </a>
            </p>
          
            <p
              class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 hover:text-red-500"
            >
            <a :href="experienceObj.repo"  target="_blank" >
              {{ experienceObj.repo  }}
            </a>
            </p>
            <p
              class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 hover:text-red-500"
            >
              <slot name="optional"></slot>
            </p>
          </div>
          <div class="p-6 pt-0">
            <button 
            @click="closeModal()"
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
             Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
