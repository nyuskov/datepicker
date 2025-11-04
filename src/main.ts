import './assets/main.css';
import './assets/fontawesome/css/fontawesome.min.css';
import './assets/fontawesome/css/solid.min.css';
import 'dayjs/locale/ru';
import App from './App.vue';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { createApp } from 'vue';

dayjs.extend(localizedFormat);
dayjs.locale('ru');

const app = createApp(App);

app.mount('#app');
