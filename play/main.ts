import { createApp } from 'vue';
import App from './app.vue';
import stellarnovaui from '@stellarnovaui/components';
const app = createApp(App);
app.use(stellarnovaui);
app.mount('#app');
