<script setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Card from "./Card.vue";
import { defineProps } from "vue";
const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="w-full px-10">
    <Carousel
      class="relative w-full"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent>
        <CarouselItem
          v-for="movie in movies"
          :key="movie.id"
          class="basis-64 md:basis-1/3 lg:basis-64"
        >
          <div class="p-1">
            <Card :movie="movie" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
