<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside
    class="hidden w-52 min-h-screen left-0 top-0 bg-[#080808] border-r border-black fixed lg:flex flex-col items-center justify-center text-white"
  >
    <ul class="flex flex-col gap-4">
      <li>
        <RouterLink class="underline" to="/">Inicio</RouterLink>
      </li>
      <li>
        <RouterLink class="underline" to="/">Explora</RouterLink>
      </li>
      <li>
        <RouterLink class="underline" to="/login">Únete</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped></style>
