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
  <div
    class="relative w-full h-full min-h-[500px] imgContainer"
    :key="movie.id"
  >
    <img
      class="w-full h-full min-h-[500px]"
      :src="getImagePath(movie.poster_path)"
      :alt="movie.title"
    />
    <div
      class="absolute bottom-4 lg:bottom-16 left-0 p-8 px-12 text-white font-bold z-20"
    >
      <h1 class="md:text-3xl lg:text-4xl mb-4">
        {{ movie.title }} ({{ movie.release_date }})
      </h1>
      <p
        class="text-base md:text-lg lg:text-xl font-normal lg:w-4/6 h-[120px] overflow-scroll mb-10 lg:mb-4"
      >
        {{ movie.overview }}
      </p>
      <RouterLink
        :to="`/movie/${movie.id}`"
        class="px-8 py-5 bg-purple-800 transition-colors hover:bg-purple-950 rounded-lg"
      >
        Ver ahora
      </RouterLink>
    </div>
  </div>
</template>
