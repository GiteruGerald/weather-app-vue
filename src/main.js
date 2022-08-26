import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "bootswatch/dist/sketchy/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)

const app = createApp(App);

app.use(createPinia());
app.use(router)

app.mount('#app')
