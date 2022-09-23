<template>
  <add-credential-modal :selected="allSelectedCredentials" v-model:is-visible="addCredentialModalIsVisible" @options:addedCredentials="onAddCredential" />
  <div class="pt-24 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p class="uppercase tracking-loose w-full">Crea tu botón</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">Sigue las instrucciones para poder crear tu botón</h1>
      </div>
      <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_1aqc3umv.json" background="transparent" speed="1" class="w-3/5 md:w-2/6 lg:w-1/6 aspect-square" loop autoplay />
    </div>
  </div>
  <div class="relative bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"
          ></path>
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          ></path>
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            id="Path-4"
            opacity="0.200000003"
          ></path>
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
  <div class="flex flex-wrap w-full container mx-auto px-3 pb-8 mt-8">
    <!-- Steps -->
    <div class="w-full md:w-1/3 lg:w-1/4">
      <step class="mb-4 last:mb-0" v-for="(_step, index) in steps" :key="_step" :selected="step == index" :text="_step" :step="index + 1" />
    </div>
    <div class="w-full md:w-2/3 lg:w-3/4 md:pl-8">
      <!-- Info add -->
      <template v-if="step == 0">
        <div class="flex justify-between">
          <h1 class="text-4xl text-pink-400">Credenciales</h1>
          <v-primary-button class="rounded-full flex items-center" style="min-width: 40px; height: 40px" @click="addCredentialModalIsVisible = true">
            <div class="flex items-center px-2">
              <div class="mr-3 hidden sm:block">Agregar credencial</div>
              <font-awesome-icon icon="fa-solid fa-plus" />
            </div>
          </v-primary-button>
        </div>
        <hr class="mt-3 dark:border-pink-300 border-t-2 rounded mb-8" />
        <!-- Is empty first step -->
        <div class="flex flex-col items-center" v-if="!allSelectedCredentials.length">
          <lottie-player
            class="self-center mt-4"
            src="https://assets4.lottiefiles.com/private_files/lf30_e3pteeho.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
          <div class="text-xl font-semibold text-center mt-2">Aún no has agregado ni una credencial es necesario agregar al menos una credencial para poder proceder.</div>
        </div>
        <div v-for="provider in providersWithCredentials" :key="provider">
          <h3 class="text-xl mb-4">Credenciales de {{ providersMapped[provider].name }}</h3>
          <div class="flex overflow-x-auto gap-x-8">
            <nft-card v-for="nft in credentials[provider]" :key="nft.address.toBase58()" :nft="nft" />
          </div>
        </div>
      </template>
      <template v-else-if="step == 1">
        <h1 class="w-full text-4xl text-pink-400">Formato de salida</h1>
        <hr class="mt-3 dark:border-pink-300 border-t-2 rounded mb-8" />
        <p>Selecciona el formato de salida que deseas para tu código</p>
        <!-- Is empty first step -->
        <div class="flex flex-wrap gap-12 mt-8">
          <output-option @click="selectedOption = 'vue'" :selected="selectedOption == 'vue'" name="VueJS" :image="vueImage" />
          <output-option @click="selectedOption = 'react'" :selected="selectedOption == 'react'" name="React" :image="reactImage" />
        </div>
      </template>
      <template v-else-if="step == 2">
        <h1 class="w-full text-4xl text-pink-400">Preview</h1>
        <hr class="mt-3 dark:border-pink-300 border-t-2 rounded mb-8" />
        <p>A continuación se te mostrara el resultado de tu configuración para verificar las credenciales seleccionadas.</p>
        <p>Antes de comenzar asegurate de tener instalado el componente de {{ selectedOption }}</p>
        <div class="my-14">
          <h2 class="w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"># Usando NPM</h2>
          <highlightjs language="js" :code="instalationCodeNpmComponent" />
        </div>
        <div class="my-14">
          <h2 class="w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"># Usando Yarn</h2>
          <highlightjs language="javascript" :code="instalationCodeYarnComponent" />
        </div>
        <div class="my-14">
          <h2 class="w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"># Código para {{ selectedOption }}</h2>
          <highlightjs language="javascript" :code="buttonCode" />
        </div>
      </template>
      <div class="flex mt-16" :class="{ 'justify-between': step > 0, 'justify-end': step == 0 }">
        <v-cancel-button v-if="step > 0" @click="step = step - 1" class="rounded-full flex min-w-[180px]">
          <div class="flex w-full justify-center items-center px-2">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
            <div class="ml-3">Atras</div>
          </div>
        </v-cancel-button>
        <v-primary-button v-if="step != 2" :disabled="!isNextEnabled" @click="handleStateClick" class="rounded-full flex items-center min-w-[180px]">
          <div class="flex w-full justify-center items-center px-2">
            <div class="mr-3">Siguiente</div>
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
        </v-primary-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, provide, ref } from "vue";
import Step from "./Step.vue";
import { AddCredentialModal, OutputOption } from "@/components/button-create";
import creators from "@/keypair/creators.json";
import NftCard from "@/components/nfts/NftCard.vue";
import vueImage from "@/assets/vue.png";
import reactImage from "@/assets/react.png";
const step = ref(0);
const selectedOption = ref(null);
const providersMapped = creators.reduce((acc, creator) => {
  acc[creator.address] = creator;
  return acc;
}, {});
const credentials = ref(
  creators.reduce((acc, creator) => {
    acc[creator.address] = [];
    return acc;
  }, {})
);
const steps = ["Selecciona tus credenciales", "Escoje tu formato", "Preview"];
const addCredentialModalIsVisible = ref(false);
const nftsMappedByAddress = ref(
  creators.reduce((acc, creator) => {
    acc[creator.address] = [];
    return acc;
  }, {})
);

const allSelectedCredentials = computed(() =>
  Object.keys(credentials.value).reduce((acc, key) => {
    acc.push(...credentials.value[key].map((cred) => cred.address.toBase58()));
    return acc;
  }, [])
);

const isNextEnabled = computed(() => {
  if (step.value == 0) {
    return allSelectedCredentials.value.length > 0;
  } else if (step.value == 1) {
    return selectedOption.value != null;
  }
  return false;
});

const providersWithCredentials = computed(() =>
  Object.keys(credentials.value).filter((key) => {
    return credentials.value[key].length > 0;
  })
);

const instalationCodeYarnComponent = computed(() => {
  return `yarn add i-am-verifiable-${selectedOption.value}`;
});
const instalationCodeNpmComponent = computed(() => {
  return `npm install -i i-am-verifiable-${selectedOption.value}`;
});

const requisitesListCode = computed(() => allSelectedCredentials.value.map((requisite) => `"${requisite}"`).join(", "));

const buttonCode = computed(() => {
  if (selectedOption.value == "vue") {
    return `
    <template>
        <h1>Verificar que se tengan credenciales </h1>
        <i-am-veritiable-button 
          v-bind:loading="isLoading"
          :requisites="requisites"
          @failed="onVerificationSucceded"
          @succeded="onVerificationFailed"
        >
          Verify
        </i-am-veritiable-button>
    </template>
    
    //Setup code
      import IAmVerifiableButton from 'i-am-verifiable-vue';
      import { ref } from 'vue'
      const requisites = [${requisitesListCode.value}]
      const isLoading = ref(false)
        const onVerificationSucceded = () => {
        alert('Verification succeded')
      }

      //It can recieve a error parameter e
      const onVerificationFailed = () => {
        alert('Verification failed')
      }

    `;
  }
  return `
  import IAmVerifiableButton from 'i-am-verifiable-react';

  const requisites = [${requisitesListCode.value}]
  const onVerificationSucceded = () => {
    alert('Verification succeded')
  }

  //It can recieve a error parameter e
  const onVerificationFailed = () => {
    alert('Verification failed')
  }

  const Demo = () => {
    const [loading, setLoading] = useState(false);

    return (
      <div>
        <h1>Verificar que se tengan credenciales </h1>
        <IAmVerifiableButton 
        loading={loading}
          setLoading={setLoading}
          requisites={requisites}
          onVerificationSucceded={onVerificationSucceded}
          onVerificationFailed={onVerificationFailed}
        >
          Verify
        </IAmVerifiableButton>
      </Form>
    );
  };

  export default Demo;
  `;
});

//Providers
provide("nftsMappedByAddress", nftsMappedByAddress);

const onAddCredential = ({ provider, credentials: addedCredentials }) => {
  credentials.value[provider.address].push(...addedCredentials);
};

const handleStateClick = () => {
  step.value += 1;
};
</script>