import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootswatch/dist/sketchy/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)

createApp(App).use(router).mount('#app')
