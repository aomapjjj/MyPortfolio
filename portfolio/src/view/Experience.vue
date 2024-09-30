<script setup>
import {ref , watch} from 'vue'
import Navbar from "@/components/Navbar.vue"
import ExperienceTimeLine from "@/components/ExperienceTimeLine.vue"
import Github from "@/components/icons/Github.vue"
import Figma from "@/components/icons/Figma.vue"
import Mysql from "@/components/icons/Mysql.vue"
import experiences from "../../data/experiences.json"
import Modal from '@/components/Modal.vue'

const searchByProjectName = ref('')
const selectedProjectId = ref(null)

const originalProjectName = experiences
const filteredExperiences = ref([...originalProjectName])
watch(searchByProjectName, () => {
  filteredExperiences.value = originalProjectName.filter((project) =>
    project.name.toLowerCase().includes(searchByProjectName.value.toLowerCase())
  )
})

const openModal = ref(false)

const clickToOpenModalById = (id) =>{
  selectedProjectId.value = id
  openModal.value = true
}




</script>



<template>
  <div class="bg-gray-100 h-full min-h-screen">
    <Navbar />
    <div class="flex items-center justify-center lg:h-screen py-16">
      
      <div 
        class="w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-sm mb-24 "
      >
        <div class="w-full flex justify-between items-center p-3">
          <h2 class="text-xl font-semibold">My Project</h2>
        </div>
        <div class="w-full flex justify-center p-1 mb-4">
          <div class="relative w-full">
            <input
              v-model="searchByProjectName"
              type="text"
              class="w-full bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300"
              placeholder="Project name"
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"
        >
          <ExperienceTimeLine @click="clickToOpenModalById(item.Id)"
            v-for="(item, index) in filteredExperiences"
            :key="item.Id"
          >
            <template #header>
              {{ item.name }}
            </template>
            <template #responsibility>
              Responsibility : {{ item.responsibility }}
            </template>
          </ExperienceTimeLine>
        </div>

    
      </div>
      <Modal :isModalOpen="openModal" @close="openModal = false" :projectId="selectedProjectId" />
     
       
        


    </div>



  </div>
</template>

<style scoped>
/* .bggd {
     background: radial-gradient(at 38.86276706538403% 19.177256486474082%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 1) 0%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 0) 100%), radial-gradient(at 33.264806031634734% 92.62381024466893%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 1) 0%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 0) 100%), radial-gradient(at 99.63136162995438% 81.5161359855169%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 1) 0%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 0) 100%), radial-gradient(at 78.51834744678361% 19.742672408383456%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 1) 0%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 0) 100%), radial-gradient(at 54.18448931151314% 64.2843468505214%, hsla(48.917197452229296, 92.89940828402369%, 66.86274509803921%, 1) 0%, hsla(48.917197452229296, 92.89940828402369%, 66.86274509803921%, 0) 100%), radial-gradient(at 0.17709483239789492% 11.650523840917959%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 1) 0%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 0) 100%), radial-gradient(at 72.88688122968779% 23.282663077645083%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 1) 0%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 0) 100%), radial-gradient(at 93.32367244400605% 95.27907528940129%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 1) 0%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 0) 100%), radial-gradient(at 42.12126672637368% 71.15565653556564%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 1) 0%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 0) 100%);            
} */
</style>
