<script setup>
import Github from "../components/icons/Github.vue"
import Instragram from "@/components/icons/Instragram.vue"
</script>

<template>
  <div
  class="container lg:w-3/5 xl:w-1/2 sm:w-full md:w-4/5 bg-white shadow-lg transform duration-200 easy-in-out"
>
  <div class="h-48 overflow-hidden">
    <img
      class="w-full"
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      alt=""
    />
  </div>
  <div class="flex justify-center px-5 -mt-16">
    <img class="w-40 bg-white p-2 rounded-full" src="/img/AomZa.jpg" alt="" />
  </div>
  <div>
    <div class="text-center px-10">
      <h2 class="text-gray-800 text-4xl font-bold">Panipak Jongsirivanich</h2>
      <a
        class="text-gray-400 mt-2 hover:text-blue-500"
        href="https://www.instagram.com/immohitdhiman/"
        target="BLANK()"
        >@aomapjjj</a
      >
      <p class="mt-2 text-gray-500 text-base">
        HI, I'm Panipak Jongsirivanich <br> I'm looking for an internship
        opportunity <br> with a focus on <span class="text-red-600">Frontend Development</span>
      </p>
    </div>
    <hr class="mt-6" />
    <div class="flex bg-gray-50">
      <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-center">
        <a
          class="flex flex-row gap-2 items-center"
          href="https://github.com/aomapjjj/MyPortfolio"
          target="_blank"
        >
          <Github /> aomapjjj
        </a>
      </div>
      <div class="border"></div>
      <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-center">
        <a
          class="flex flex-row gap-2 items-center"
          href="https://www.instagram.com/aomapj?igsh=cHE4Y28xNjk1bGR3&utm_source=qr"
          target="_blank"
        >
          <Instragram /> aomapjjj
        </a>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped></style>
