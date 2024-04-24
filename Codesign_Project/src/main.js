import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router'
import AnimateOnScroll from 'primevue/animateonscroll';


const app = createApp(App)

app.directive('animateonscroll', AnimateOnScroll);
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
