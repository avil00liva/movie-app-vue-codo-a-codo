<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const getImagePath = (imgName) => {
  return new URL(`../../assets/img/${imgName}`, import.meta.url).href;
};
</script>
<template>
  <div class="w-60 h-52 my-7" :key="movie.id">
    <RouterLink :to="`/more-movies/${movie.id}`">
      <img
        class="rounded-lg w-full max-h-[76%] my-2 transition-all hover:border-[4px] hover:border-purple-800"
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :alt="movie.title"
      />
      <span class="text-center mt-2 font-medium"
        >{{ movie.title }} ({{ movie.release_date }})</span
      >
    </RouterLink>
  </div>
</template>
<style scoped></style>
