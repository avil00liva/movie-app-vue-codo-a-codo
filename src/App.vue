<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";
</script>

<template>
  <Navbar />
  <section class="w-full h-[calc(100%-40px)] flex">
    <Sidebar />
    <Content />
  </section>
</template>

<style scoped></style>
