<script setup>
import { MoviesStaticData } from "@/service/MoviesData";
import Footer from "@/components/Footer.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();

const movie = ref({});

onMounted(async () => {
  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const movie_id = route?.params.id;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=es-ES`
    );
    const data = await response.json();
    console.log("Single movie: ", data);
    movie.value = data;
  } catch (err) {
    console.log(err);
  }
});
</script>
<template>
  <main
    class="h-screen w-full lg:ml-52 overflow-y-auto bg-[#080808] text-white flex flex-col gap-4"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w1280${movie.poster_path}`"
      :alt="movie.title"
      class="w.full h-64 object-cover"
    />
    <div
      class="flex flex-col md:flex-row px-8 items-center md:items-start gap-4 -mt-16"
    >
      <div class="ml-4 w-56 h-64 rounded-lg overflow-hidden detailCardImg">
        <img
          :src="`https://image.tmdb.org/t/p/w780${movie.poster_path}`"
          :alt="movie.title"
          class="w-[inherit] h-full rounded-lg object-cover"
        />
      </div>
      <div class="self-center text-lg lg:text-3xl">
        <h1>{{ movie.title }} ({{ movie.release_date }})</h1>
        <h2 class="text-base">Duración: {{ movie.runtime }} minutos</h2>
      </div>
    </div>
    <section class="p-2 md:p-8">
      <strong>Sinopsis:</strong>
      <p>{{ movie.overview }}</p>
    </section>
    <Footer />
  </main>
</template>
<style scoped>
.detailCardImg {
  box-shadow: 0 0 20px rgb(107 33 168);
}
</style>
