<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, onMounted, ref, type Ref } from 'vue';
import Calendar from './Calendar.vue';
import CurrentDate from './CurrentDate.vue';
import Activator from './Activator.vue';
import Popup from './Popup.vue';

const _language = ref('en');
const _date = defineModel<Date>();
const _popup_top = ref(null);
const _popup_left = ref(null);
const _active: Ref<Boolean, Boolean> = ref(false);
const _current_date = computed(() => {
    return dayjs(_date.value).format('L');
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
    _language.value = _language.value === 'en' ? 'рус' : 'en';
}
</script>

<template>
    <span @click="changeLang">{{ _language }}</span>
    <Activator @activate="activate">
        <slot></slot>
    </Activator>
    <Popup :popup_style="_popup_style" ref="_popup" v-model="_active">
        <CurrentDate v-model="_date" :current_date="_current_date" />
        <Calendar v-model="_date" @click="deactivate" />
    </Popup>
</template>
