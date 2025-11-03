import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.locale('ru');

const app = createApp(App);

app.mount('#app');
