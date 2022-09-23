<template>
  <div
    class="rounded-lg px-20 py-4 cursor-pointer transition transform duration-200 hover:scale-110"
    :class="{
      'shadow-xl shadow-primary-200/80': selected,
      shadow: !selected,
    }"
  >
    <img :src="image" class="w-28 rounded my-4" />
    <h4 class="text-2xl w-full text-center">{{ name }}</h4>
  </div>
</template>
<script setup>
defineProps(["name", "image", "selected"]);
</script>