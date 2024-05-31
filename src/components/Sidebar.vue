<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside
    class="hidden w-52 min-h-screen left-0 top-0 bg-[#080808] border-r border-black fixed lg:flex flex-col items-center justify-around text-white"
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
    <ul class="">
      <li>
        <RouterLink class="underline api" to="/movieapi"
          >Más películas</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.api {
  position: relative;
  width: fit-content;
}
.api::before {
  content: "API";
  font-size: 12px;
  background-color: darkred;
  color: #fff;
  font-weight: bold;
  padding: 1px 6px;
  position: absolute;
  top: -17px;
  right: -32px;
  border-radius: 7px;
  animation: parpadear 0.8s ease infinite;
}

@keyframes parpadear {
  form {
    background-color: darkred;
  }
  to {
    background-color: red;
  }
}
</style>
