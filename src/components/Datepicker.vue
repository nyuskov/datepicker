<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, onMounted, ref, type Ref } from 'vue';
import Calendar from './Calendar.vue';
import CurrentDate from './CurrentDate.vue';
import Activator from './Activator.vue';
import Popup from './Popup.vue';
import Weekdays from './Weekdays.vue';

const _language = ref('рус');
const _date = defineModel<Date>();
const _popup_top = ref(null);
const _popup_left = ref(null);
const _active: Ref<Boolean, Boolean> = ref(false);
const _current_date = computed(() => {
    return dayjs(_date.value).format('MMMM YYYY');
});
const _popup_style = computed(() => {
    return {
        left: _popup_left.value,
        top: _popup_top.value,
    }
});

function activate(left: number, top: number) {
    _active.value = true;
    _popup_left.value = `${left}px`;
    _popup_top.value = `${top}px`;
}
function deactivate() {
    _active.value = false;
}
function changeLang() {
    if (_language.value === 'en') {
        _language.value = 'рус';
        dayjs.locale('ru');
    } else {
        _language.value = 'en';
        dayjs.locale('en');
    }
}
</script>

<template>
    <Activator @activate="activate">
        <slot></slot>
    </Activator>
    <Popup :popup_style="_popup_style" ref="_popup" v-model="_active">
        <CurrentDate v-model="_date" :current_date="_current_date" />
        <Weekdays :language="_language" />
        <Calendar v-model="_date" @click="deactivate" />
    </Popup>
    <span class="lang" @click="changeLang">{{ _language }}</span>
</template>

<style scoped>
.lang {
    cursor: pointer;
    background-color: var(--color-same-month);
    margin: 0.25rem;
    padding: 0.2rem;
}
</style>