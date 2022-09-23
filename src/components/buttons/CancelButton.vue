<template>
  <button
    @click="(e) => $emit('onClick', e)"
    class="
      hover:underline
      bg-red-400
      text-white
      font-bold
      rounded-full
      mt-4
      lg:mt-0
      py-2
      px-8
      shadow
      focus:outline-none focus:shadow-outline
      transform
      transition
      hover:scale-105
      duration-300
      ease-in-out
    "
  >
    <slot />
  </button>
</template>