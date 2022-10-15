<template>
  <modal v-model="isVisibleModal" class="w-full sm:w-5/6 md:w-4/5 max-h-full" classWrapper="!max-h-full">
    <div class="bg-primary-50/50 p-6 max-h-full overflow-y-auto" v-if="isVisibleModal">
      <div class="flex flex-col min-h-[65vh]">
        <div class="text-3xl text-primary-600 font-bold">Agregar credencial</div>
        <p>Selecciona primero la entidad dueña de la credencial y luego selecciona la credenciales (se pueden agregar más de una credencial a la vez)</p>
        <div class="py-6 grow">
          <v-select
            name="provider"
            label="Nombre de la entidad que emite la credencial"
            placeholder="Selecciona la entidad"
            rules="required"
            :options="creatorsRef"
            :reduce="(option) => option"
            :getOptionLabel="(option) => option.name"
          />
          <v-select
            name="credentials"
            label="Credenciales por agregar"
            placeholder="Selecciona las credenciales"
            multiple
            :disabled="!values.provider"
            rules="required"
            :options="availableCredentials"
            :reduce="(option) => option"
            :getOptionLabel="(option) => option.name"
            :loading="values.provider && values.provider.fetching"
          />
        </div>
        <div class="flex justify-end">
          <v-primary-button @click="setCredentials" :disabled="!meta.valid" class="min-w-[180px]"> Agregar </v-primary-button>
        </div>
      </div>
    </div>
  </modal>
</template>
<script setup>
import { computed, inject, onMounted, ref, toRef, toRefs, watch } from "vue";
import creators from "@/keypair/creators.json";
import { useForm } from "vee-validate";
import { useWorkspace } from "@/composables";
import { Connection, clusterApiUrl, PublicKey, Keypair } from "@solana/web3.js";
const props = defineProps({
  isVisible: {
    type: Boolean,
  },
  selected: {
    type: Array,
    default: [],
  },
});

const creatorsRef = ref(creators);
const { selected } = toRefs(props);

//Injected values
const nftsMappedByAddress = inject("nftsMappedByAddress", {});
const { metaplex } = useWorkspace();
const { values, meta, setFieldValue } = useForm();

const emit = defineEmits(["update:isVisible", "options:addedCredentials"]);

const isVisible = computed(() => props.isVisible);

const isVisibleModal = computed({
  get: () => isVisible.value,
  set: (value) => emit("update:isVisible", value),
});

const availableCredentials = computed(() => {
  if (values.provider) {
    const credentials = nftsMappedByAddress.value[values.provider.address] ?? [];
    return credentials.filter((credential) => !selected.value.includes(credential.address.toBase58()));
  }
  return [];
});

const fetchCredentials = async (owner) => {
  owner.fetching = true;
  const pb = new PublicKey(owner.address);
  const _nfts = await metaplex.nfts().findAllByOwner({ owner: pb });

  const nfts = await Promise.all(
    _nfts.map((nft) => {
      return metaplex.nfts().load({ metadata: nft });
    })
  );

  nftsMappedByAddress.value[owner.address] = nfts.filter((nft) => nft.json && nft.json.model == "credential" && nft.uri.includes("nft-metadata-augus") && nft.collection == null);
  owner.fetching = false;
};

watch(
  () => values.provider,
  (newValue) => {
    //Each time provider gets changed we clean
    setFieldValue("credentials", null);
    //Check if we need to fetch
    if (newValue && !nftsMappedByAddress.value[newValue.address].length) {
      fetchCredentials(newValue);
    }
  }
);

const setCredentials = () => {
  emit("options:addedCredentials", values);
  isVisibleModal.value = false;
};
</script>