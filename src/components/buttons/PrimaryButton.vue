<template>
  <button
    :disabled="disabled"
    class="text-white font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow"
    :class="{
      'hover:underline transform transition hover:scale-105 duration-300 ease-in-out bg-pink-300 focus:outline-none focus:shadow-outline': !disabled,
      'bg-gray-400': disabled,
    }"
  >
    <slot />
  </button>
</template>
<script>
import { toRef } from "vue";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
      default: "p-2 ",
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    const reactiveDisabled = toRef(props.disabled);

    //Computed
  },
};
</script>