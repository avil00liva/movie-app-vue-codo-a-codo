<script setup>
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroCardApi from "./HeroCardApi.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const verDetalles = (movieId) => {
  console.log("Ver ahora clickeado para la película con ID:", movieId);
  router.push(`/movie/${movieId}`);
};

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

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
      <CarouselItem v-for="movie in movies" :key="movie.id">
        <div class="p-1">
          <HeroCardApi :movie="movie" @verAhora="verDetalles(movie.id)" />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="left-4" />
    <CarouselNext class="right-4" />
  </Carousel>
</template>

<style scoped></style>
