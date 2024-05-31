<script setup>
import { ref } from "vue";
import { MoviesStaticData } from "@/service/MoviesData";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroCard from "./HeroCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const verDetalles = (movieId) => {
  console.log("Ver ahora clickeado para la película con ID:", movieId);
  router.push(`/movie/${movieId}`);
};

const heroMovies = ref(MoviesStaticData.slice(10));

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});
</script>

<template>
  <Carousel
    class="relative w-full min-h-[500px]"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
  >
    <CarouselContent>
      <CarouselItem v-for="movie in heroMovies" :key="movie.id">
        <div class="p-1">
          <HeroCard :movie="movie" @verAhora="verDetalles(movie.id)" />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="left-4" />
    <CarouselNext class="right-4" />
  </Carousel>
</template>

<style scoped></style>
