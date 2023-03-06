import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';

import './assets/fonts.css';
import './assets/reset.css';

const app = createApp(App);

app.component('Flicking', Flicking);
app.use(router);

app.mount('#app');
