import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


import VInput from "./components/VInput.vue"
import VTextArea from "./components/inputs/VTextArea.vue"
import {VVSelect, VDatePicker, VCheckbox} from "./components/inputs"
import FileInput from "./components/inputs/FileInput.vue"

import Notifications from '@kyvg/vue3-notification'
import Spinner from './components/loaders/Spinner.vue'
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import CancelButton from './components/buttons/CancelButton.vue'
//Highlighter
// import hljs from 'highlight.js/lib/common';

import 'highlight.js/styles/nord.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";
// hljs.registerLanguage('javascript', javascript);

import { Modal } from './components'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import * as icons from '@fortawesome/free-solid-svg-icons'
import { faUser, faIdCard, faMagnifyingGlass, faBell, faBars, faPlus, faKey, faInfo, faChevronLeft, faFile, faPassport, faTicket, faXmark, faEyeSlash, faEye, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faIdCard, faMagnifyingGlass, faBell, faBars, faPlus, faKey, faInfo, faChevronLeft, faFile, faPassport, faTicket, faXmark, faEyeSlash, faEye, faChevronRight)

//Vee validate all rules
import AllRules from '@vee-validate/rules';
import { defineRule, configure } from 'vee-validate';

Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
  });

import en from '@vee-validate/i18n/dist/locale/en.json';
import es from '@vee-validate/i18n/dist/locale/es.json';

import { localize, setLocale } from '@vee-validate/i18n';

configure({
  generateMessage: localize({
    es,
  }),
});

setLocale('es')
//Css imports
import "vue-select/dist/vue-select.css";
import './index.css'
import '@vuepic/vue-datepicker/dist/main.css'

  createApp(App).component('v-input', VInput)
.component('font-awesome-icon', FontAwesomeIcon)
.component('v-primary-button', PrimaryButton)
.component('v-cancel-button', CancelButton)
.component('v-spinner', Spinner)
.component('v-file-input', FileInput)
.component('v-text-area', VTextArea)
.component("v-select", VVSelect)
.component("v-v-select", VVSelect)
.component("v-checkbox", VCheckbox)
.component("v-date-picker", VDatePicker)
.component("modal", Modal)
.use(hljsVuePlugin)
.use(router)
.use(Notifications)
.mount("#app");


