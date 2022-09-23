<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Porque usarnos?</h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Facilitamos tu proceso de verificación</h3>
          <p class="text-gray-600 mb-8">
            Nosotros sabemos que el proceso de verificación puede ser algo complicado que requiere de mucho procesamiento y código para asegurarnos que no se encuentre un fraude
            <br />
            <br />
            Nosotros lo hacemos por ti! Únicamente haz click en <span class="text-pink-400">Crear bóton</span> y empieza a configurar que deseas verificar y listo.
          </p>
        </div>
        <landing-code-view />
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <connected-world class="w-full sm:w-1/2 p-6 mt-6" />

        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Es descentralizado</h3>
            <p class="text-gray-600 mb-8">
              Debido a la naturaleza de blockchain la verificación es descentralizada es decir no dependerá de ni una entidad ni autoridad en mantener estable el servicio.
              <br />
              <br />
              De lo único que dependerás es de la red de Solana 🌎
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Es <i>permissionless</i></h3>
          <p class="text-gray-600 mb-8">
            Nosotros sabemos lo molesto que es el tener que estar esperando la aprobación de un proceso de verificación y lo difícil que es poder brindar un servicio amigable al usuario
            <br />
            <br />
            Nuestro modelo no depende de permisos extras el proceso es automatico. Dentro de nuestro proceso o es válida la credencial o no lo es no existe el tener que esperar.
          </p>
        </div>
        <permission-less class="w-full sm:w-1/2 p-6 mt-6" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { LandingCodeView, ConnectedWorld, PermissionLess, Footer, WhyUs } from "./index";
</script>