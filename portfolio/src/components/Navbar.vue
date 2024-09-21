<script setup>
import { ref } from "vue"
import ButtonNav from "./ButtonNav.vue"
</script>

<template>
  <div>
    <div class="navbar">
      <div class="navbar-start">
        <button class="btn btn-ghost btn-circle" @click="toggleSidebar">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </button>
      </div>
      <div class="navbar-center gap-10 mt-3">
        <ButtonNav> HOME </ButtonNav>
        <ButtonNav> ABOUT </ButtonNav>
        <ButtonNav> EXPERIENCE </ButtonNav>
      </div>
      <div class="navbar-end">
        
      </div>
    </div>

    <!-- <Sidebar v-if="openSidebar"/> -->
  </div>
</template>

<style scoped></style>
