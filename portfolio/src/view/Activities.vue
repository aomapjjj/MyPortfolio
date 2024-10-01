<script setup>
import Navbar from "@/components/Navbar.vue"
import Card from "@/components/Card.vue"
import activity from "../../data/activity.json"
</script>

<template>
  <div class="bg-gray-100 h-full min-h-screen w-full pb-10">
    <Navbar />
    <section>
      <div
        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-10 mb-0"
      >
        <Card v-for="(item, index) in activity" :key="index">
          <template #img>
            <img :src="item.img" alt="" />
          </template>
          <template #date>
            {{ item.date }}
          </template>
          <template #Header>
            {{ item.name }}
          </template>
          <template #description>
            {{ item.description }}
          </template>
          <template #readmore>
            <a :href="item.website" target="_blank"> Readmore >> </a>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
