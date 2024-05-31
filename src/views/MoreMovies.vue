<script setup>
import { onMounted, ref } from "vue";
import CarouselHeroApi from "@/components/apiComponents/CarouselHeroApi.vue";
import MoviesUIApi from "@/components/apiComponents/MoviesUIApi.vue";
import { MoviesStaticData } from "@/service/MoviesData";
import Footer from "@/components/Footer.vue";

const movies = ref([]);

onMounted(async () => {
  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`
    );
    const data = await response.json();
    console.log("Data: ", data);
    movies.value = data.results;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <main
    class="h-screen w-full lg:ml-52 overflow-y-auto bg-[#080808] flex flex-col gap-4"
  >
    <CarouselHeroApi :movies="movies" />
    <section class="min-h-screen mb-32 mt-7 text-white p-4 lg:p-8">
      <h1 class="text-center font-semibold text-3xl lg:text-4xl mb-7">
        BIG Movie - Ver películas y series online
      </h1>
      <h2 class="text-white text-2xl font-semibold">
        Últimas películas agregadas
      </h2>
      <MoviesUIApi :movies="movies" />
      <h2 class="text-white text-2xl font-semibold mt-8">
        Películas más vistas de la semana
      </h2>
      <MoviesUIApi :movies="movies.slice(4)" />
    </section>
    <Footer />
  </main>
</template>

<style scoped></style>
