import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"




import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
      },
})


createApp(App)
.use(pinia)
.use(router)
.use(vuetify)
.mount('#app')
