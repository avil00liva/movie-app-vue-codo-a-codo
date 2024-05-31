<script setup>
import { ref } from "vue";
import CarouselHero from "@/components/ui/CarouselHero.vue";
import MoviesUI from "@/components/ui/MoviesUI.vue";
import { MoviesStaticData } from "@/service/MoviesData";
import Footer from "@/components/Footer.vue";

const movies = ref(MoviesStaticData);
const topMovies = ref(MoviesStaticData?.slice(9));
</script>

<template>
  <main
    class="h-screen w-full lg:ml-52 overflow-y-auto bg-[#080808] flex flex-col gap-4"
  >
    <CarouselHero />
    <section class="min-h-screen mb-32 mt-7 text-white p-4 lg:p-8">
      <h1 class="text-center font-semibold text-3xl lg:text-4xl mb-7">
        BIG Movie - Ver películas y series online
      </h1>
      <h2 class="text-white text-2xl font-semibold">
        Últimas películas agregadas
      </h2>
      <MoviesUI :movies="movies" />
      <h2 class="text-white text-2xl font-semibold mt-8">
        Películas más vistas de la semana
      </h2>
      <MoviesUI :movies="topMovies" />
    </section>
    <Footer />
  </main>
</template>

<style scoped></style>
