<template>
  <main
    class="h-screen w-full pt-11 lg:ml-52 overflow-y-auto bg-[#080808] flex flex-col gap-4 items-center justify-center"
  >
    <form
      v-if="login"
      @submit.prevent="handleSubmit"
      class="cardHeroImg w-4/5 md:w-4/6 lg:w-1/3 h-[500px] glowCard flex flex-col p-4 gap-5 items-center justify-center rounded-lg"
    >
      <h1 class="text-white font-bold text-3xl">Login</h1>
      <input
        v-model="username"
        class="w-full h-8 rounded-sm outline-none border-0 border-transparent pl-2"
        type="text"
        placeholder="Ingresa tu usuario"
      />
      <span v-show="validUserName" class="text-red-600 text-sm"
        >Falta nombre de usuario</span
      >
      <input
        v-model="password"
        class="w-full h-8 rounded-sm outline-none border-0 border-transparent pl-2"
        type="password"
        placeholder="Ingresa tu contraseña"
      />
      <span v-show="validPassword" class="text-red-600 text-sm"
        >Falta contraseña</span
      >
      <span
        @click="formChange"
        class="text-purple-800 underline font-bold cursor-pointer"
        >No tengo cuenta</span
      >
      <button
        class="px-8 py-4 font-bold text-white rounded-md bg-purple-800 hover:bg-purple-950 transition-all"
        type="submit"
      >
        Iniciar sesión
      </button>
    </form>
    <!-- Registro -->
    <form
      v-if="!login"
      @submit.prevent="handleRegSubmit"
      class="cardHeroImg w-4/5 md:w-4/6 lg:w-1/3 h-[500px] glowCard flex flex-col p-4 gap-5 items-center justify-center rounded-lg"
    >
      <h1 class="text-white font-bold text-lg md:text-xl">
        Se miembro de esta comunidad
      </h1>
      <input
        v-model="username"
        class="w-full h-8 rounded-sm outline-none border-0 border-transparent pl-2"
        type="text"
        placeholder="Ingresa tu usuario"
      />
      <span v-show="validUserName" class="text-red-600 text-sm"
        >Falta nombre de usuario</span
      >
      <input
        v-model="email"
        class="w-full h-8 rounded-sm outline-none border-0 border-transparent pl-2"
        type="email"
        placeholder="Ingresa tu email"
      />
      <span v-show="validEmail" class="text-red-600 text-sm">Falta email</span>
      <input
        v-model="password"
        class="w-full h-8 rounded-sm outline-none border-0 border-transparent pl-2"
        type="password"
        placeholder="Ingresa tu contraseña"
      />
      <span v-show="validPassword" class="text-red-600 text-sm"
        >Falta contraseña</span
      >
      <span
        @click="formChange"
        class="text-purple-800 underline font-bold cursor-pointer"
        >Tengo una cuenta</span
      >
      <button
        class="px-8 py-4 font-bold text-white rounded-md bg-purple-800 hover:bg-purple-950 transition-all"
        type="submit"
      >
        Iniciar sesión
      </button>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const login = ref(false);

const username = ref("");
const password = ref("");
const email = ref("");

const validUserName = ref(false);
const validPassword = ref(false);
const validEmail = ref(false);

const router = useRouter();

const handleSubmit = () => {
  if (username.value.trim() && password.value.trim()) {
    console.log(`Usuario: ${username.value}, Contraseña: ${password.value}`);
    username.value = "";
    password.value = "";

    validUserName.value = false;
    validPassword.value = false;
    router.push("/");
    return;
  }

  if (!username.value.trim()) {
    validUserName.value = true;
  }
  if (!password.value.trim()) {
    validPassword.value = true;
  }
};

const handleRegSubmit = () => {
  if (username.value.trim() && password.value.trim() && email.value.trim()) {
    console.log(`Usuario: ${username.value}, Contraseña: ${password.value}`);
    username.value = "";
    password.value = "";
    email.value = "";

    validUserName.value = false;
    validPassword.value = false;
    validEmail.value = false;

    login.value = true;
    return;
  }

  if (!username.value.trim()) {
    validUserName.value = true;
  }
  if (!password.value.trim()) {
    validPassword.value = true;
  }
  if (!email.value.trim()) {
    validEmail.value = true;
  }
};

const formChange = () => {
  login.value = !login.value;
};
</script>
<style scoped>
.glowCard {
  box-shadow: 0 0 20px rgb(107 33 168);
}
</style>
