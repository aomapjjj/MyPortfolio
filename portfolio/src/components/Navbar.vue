<script setup>
import { ref } from "vue"
import ButtonNav from "./ButtonNav.vue"
</script>

<template>
  <div>
    <div class="navbar">
      <div class="navbar-start">

      </div>
      <div class="navbar-center gap-10 mt-3">
        <RouterLink to="/">
          <ButtonNav> HOME </ButtonNav>
        </RouterLink>
        <RouterLink to="/about">
          <ButtonNav> ABOUT </ButtonNav>
        </RouterLink>
        <RouterLink to="/activity">
          <ButtonNav> ACTIVITIES </ButtonNav>
        </RouterLink>
        <RouterLink to="/experience">
        <ButtonNav> EXPERIENCE </ButtonNav>
        </RouterLink>
      </div>
      <div class="navbar-end"></div>
    </div>

    <!-- <Sidebar v-if="openSidebar"/> -->
  </div>
</template>

<style scoped></style>
