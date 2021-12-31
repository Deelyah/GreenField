import { createApp } from 'vue';
import router from './Router.js'
import store from './Store.js'

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(store)

app.mount('#app');
