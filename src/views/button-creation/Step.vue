<template>
  <div
    class="flex items-center gap-x-4 text-xl pb-3"
    :class="{
      'border-b-2  border-pink-400/40': selected,
    }"
  >
    <div
      class="transition-colors rounded-full h-11 aspect-square flex items-center text-center font-bold text-white shadow place-content-center"
      :class="{
        'bg-gradient-to-r from-pink-300/60 to-indigo-400/60': selected,
        'bg-gray-400': !selected,
      }"
    >
      {{ step }}
    </div>
    {{ text }}
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  step: {
    type: [Number, String],
  },
  selected: {
    type: Boolean,
  },
});
</script>
