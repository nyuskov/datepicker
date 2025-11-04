import './assets/main.css';
import './assets/fontawesome/css/fontawesome.min.css';
import './assets/fontawesome/css/solid.min.css';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';
import App from './App.vue';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import { createApp } from 'vue';

dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.locale('ru');

dayjs.updateLocale('en', {
    weekdays: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
})
dayjs.updateLocale('ru', {
    weekdays: [
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ],
    weekdaysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
})

const app = createApp(App);

app.mount('#app');
