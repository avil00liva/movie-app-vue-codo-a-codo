<script setup>
import { MoviesStaticData } from "@/service/MoviesData";
import Footer from "@/components/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const fMovie = MoviesStaticData.find((movie) => movie.id === +route.params?.id);

const getImagePath = (imgName) => {
  return new URL(`../assets/img/${imgName}`, import.meta.url).href;
};
</script>
<template>
  <main
    class="h-screen w-full lg:ml-52 overflow-y-auto bg-[#080808] text-white flex flex-col gap-4"
  >
    <img
      :src="getImagePath(fMovie.poster_path)"
      :alt="fMovie.title"
      class="w.full h-64 object-cover"
    />
    <div
      class="flex flex-col md:flex-row px-8 items-center md:items-start gap-4 -mt-16"
    >
      <div class="ml-4 w-56 h-64 rounded-lg overflow-hidden detailCardImg">
        <img
          :src="getImagePath(fMovie.poster_path)"
          :alt="fMovie.title"
          class="w.full h-full rounded-lg object-cover"
        />
      </div>
      <div class="self-center text-lg lg:text-3xl">
        <h1>{{ fMovie.title }} ({{ fMovie.release_date }})</h1>
        <h2 class="text-base">Duración: {{ fMovie.duration }}</h2>
      </div>
    </div>
    <section class="p-2 md:p-8">
      <strong>Sinopsis:</strong>
      <p>{{ fMovie.overview }}</p>
    </section>
    <Footer />
  </main>
</template>
<style scoped>
.detailCardImg {
  box-shadow: 0 0 20px rgb(107 33 168);
}
</style>
