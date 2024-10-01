<script setup></script>

<template>
  <div
    class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex flex-col h-full"
  >
    <slot name="img"></slot>
    <div class="p-4 flex-1">
      <p class="mb-1 text-sm text-primary-500"><slot name="date"></slot></p>
      <h3 class="text-xl font-medium text-gray-900">
        <slot name="Header"></slot>
      </h3>
      <p class="mt-1 text-gray-500"><slot name="description"></slot></p>
    </div>
    <button
      class="mt-auto px-5 py-2 tracking-wider text-black mb-3"
      type="button"
      aria-label="like"
    >
      <slot name="readmore"></slot>
    </button>
  </div>
</template>

<style scoped></style>
