<template>
  <div
    @click="(e) => $emit('click', e)"
    class="w-60 h-60 bg-primary-50 rounded flex flex-col justify-end bg-contain"
    :class="{
      'cursor-pointer': nft.model != 'metadata',
    }"
    :style="styleBg"
  >
    <div class="text-white text-white px-2 py-2 bg-primary-300">
      <div class="text-sm font-bold h-8 flex flex-col">
        {{ nft.name }}
      </div>
      <div v-if="description" class="text-xs">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script>
import { toRef, toRefs } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  props: ["nft"],
  setup(props) {
    const { nft } = toRefs(props);
    const json = computed(() => nft.value.json);

    const styleBg = computed(() => {
      //If the json is ther
      if (nft.value.json) {
        return {
          "background-image": `url(${nft.value.json.image})`,
        };
      }
      return {};
    });

    const description = computed(() => (json.value ? json.value.description : null));

    return {
      styleBg,
      description,
    };
  },
};
</script>