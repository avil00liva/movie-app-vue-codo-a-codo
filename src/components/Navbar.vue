<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

const isVisible = ref(false);

const toggleAside = () => {
  isVisible.value = !isVisible.value;
};

const asideClasses = computed(() => ({
  "bg-purple-800 w-52 md:w-1/3 h-full z-[1000] text-black relative p-4 flex flex-col gap-16 animationTranslate": true,
  show: isVisible.value,
}));
</script>

<template>
  <nav
    class="hidden lg:flex min-h-10 w-full bg-transparent z-50 fixed left-0 top-0 font-bold text-white text-lg p-4 items-center justify-between"
  >
    <span>
      <strong>BIG</strong>
      Movie
    </span>

    <ul>
      <li>
        <a class="underline mr-6 api" href="/more-movies">Más películas</a>
      </li>
    </ul>
  </nav>
  <!-- Responsive -->
  <nav
    class="lg:hidden flex min-h-10 w-full bg-transparent z-50 fixed left-0 top-0 font-bold text-white text-lg p-4 items-center justify-between"
  >
    <div
      @click="toggleAside"
      class="w-[30px] h-[30px] flex flex-col gap-2 cursor-pointer hover:opacity-70 transition-opacity"
    >
      <div class="w-full h-1 bg-purple-800" />
      <div class="w-full h-1 bg-purple-800" />
      <div class="w-full h-1 bg-purple-800" />
    </div>
    <div
      v-show="isVisible"
      class="w-full h-screen absolute top-0 left-0 overflow-hidden"
    >
      <div
        @click="toggleAside"
        class="absolute bg-[#0000003a] w-full h-full z-[999]"
      />
      <aside :class="asideClasses">
        <div
          @click="toggleAside"
          class="text-3xl cursor-pointer font-bold text-start w-full"
        >
          X
        </div>
        <ul class="flex flex-col gap-4">
          <li>
            <span>
              <strong class="bg-black text-white p-1 rounded-sm">BIG</strong>
              Movie
            </span>
          </li>
          <li>
            <RouterLink class="underline" to="/">Inicio</RouterLink>
          </li>
          <li>
            <RouterLink class="underline" to="/">Explora</RouterLink>
          </li>
          <li>
            <RouterLink class="underline" to="/login">Únete</RouterLink>
          </li>
        </ul>
        <RouterLink class="underline api" to="/more-movies"
          >Más películas</RouterLink
        >
      </aside>
    </div>
  </nav>
</template>

<style scoped>
.api {
  position: relative;
  width: fit-content;
}
.api::before {
  content: "API";
  font-size: 12px;
  background-color: darkred;
  color: #fff;
  font-weight: bold;
  padding: 1px 6px;
  position: absolute;
  top: -17px;
  right: -32px;
  border-radius: 7px;
  animation: parpadear 0.8s ease infinite;
}

@keyframes parpadear {
  form {
    background-color: darkred;
  }
  to {
    background-color: red;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animationTranslate {
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.show {
  transform: translateX(0);
  opacity: 1;
  animation: slideIn 0.2s ease-in-out forwards;
}
</style>
