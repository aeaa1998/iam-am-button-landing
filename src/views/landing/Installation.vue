<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Instalación Verifiable</h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="my-14">
        <h2 class="w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"># Usando NPM</h2>
        <highlightjs language="js" code="npm install -i i-am-verifiable" />
      </div>
      <div class="my-14">
        <h2 class="w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"># Usando Yarn</h2>
        <highlightjs language="javascript" code="yarn add i-am-verifiable" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from "vue-demi";
import { LandingCodeView, ConnectedWorld, PermissionLess, Footer, WhyUs } from "./index";
</script>