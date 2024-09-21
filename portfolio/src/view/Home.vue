<script setup>
import { ref } from "vue"
import Navbar from "../components/Navbar.vue"
import Github from "../components/icons/Github.vue"
import Instragram from "@/components/icons/Instragram.vue";
</script>

<template>
  <div>
    <Navbar />

    <div class="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2">
      <!-- Text Section -->
      <div
        class="text-box flex flex-col justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl"
      >
        <h1 class="text-4xl font-bold mb-4">
          HI, I'm <span class="text-indigo-600">Panipak Jongsirivanich</span>
        </h1>
        <h1 class="text-4xl font-bold mb-4">I'm looking for an internship</h1>
        <h1 class="text-4xl font-bold mb-4">opportunity with a focus on</h1>
        <h1 class="text-4xl text-indigo-600 font-extrabold mb-4">
          Frontend Development
        </h1>
        <div class="flex flex-col mt-4">
       
            <a class="flex flex-row gap-2 items-center mb-4" href="https://github.com/aomapjjj/MyPortfolio" target="_blank"> <Github /> aomapjjj</a>
            <a class="flex flex-row gap-2 items-center mb-4" href="https://www.instagram.com/aomapj?igsh=cHE4Y28xNjk1bGR3&utm_source=qr" target="_blank"> <Instragram /> aomapjjj</a>
            <a class="flex flex-row gap-2 items-center mb-4" href="https://github.com/aomapjjj/MyPortfolio" target="_blank"> <Github /> aomapjjj</a>
         
        </div>
      </div>

      <!-- Image Section -->
      <div class="flex justify-center items-center mr-24">
        <img
          src="/img/AomZa.jpg"
          alt="Product Designer"
          class="rounded-xl object-cover w-full h-auto max-w-md"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-box {
  background: radial-gradient(
      at 1.7206629630172277% 14.189913344723237%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    ),
    radial-gradient(
      at 66.12643340495433% 26.773198783683117%,
      hsla(200.47058823529412, 100%, 50%, 1) 0%,
      hsla(200.47058823529412, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 63.03383416154076% 51.83536674953611%,
      hsla(321.88235294117646, 100%, 50%, 1) 0%,
      hsla(321.88235294117646, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 76.70197000183883% 53.98620465459851%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    ),
    radial-gradient(
      at 64.99806347912899% 69.12815600582786%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    ),
    radial-gradient(
      at 61.89680054306068% 3.5470035982506087%,
      hsla(200.47058823529412, 100%, 50%, 1) 0%,
      hsla(200.47058823529412, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 57.88816162579072% 97.97711375964238%,
      hsla(321.88235294117646, 100%, 50%, 1) 0%,
      hsla(321.88235294117646, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 75.06049803747497% 30.850436717764563%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    );
}
</style>
