<script setup lang="ts">
import dayjs from 'dayjs';
import { defineModel } from 'vue';

const _model = defineModel<Date>();
const props = defineProps({
    current_date: String
});

function updateCurrentDate(date: dayjs.Dayjs) {
    _model.value = date.toDate();
};
function shiftCurrentDate(shift: string) {
    if (shift === 'prev_year') {
        updateCurrentDate(dayjs(_model.value).subtract(1, 'year'));
    } else if (shift === 'next_year') {
        updateCurrentDate(dayjs(_model.value).add(1, 'year'));
    } else if (shift === 'prev_month') {
        updateCurrentDate(dayjs(_model.value).subtract(1, 'month'));
    } else if (shift === 'next_month') {
        updateCurrentDate(dayjs(_model.value).add(1, 'month'));
    }
};
</script>

<template>
    <div class="current-date">
        <i class="button fa-solid fa-angles-left" @click="shiftCurrentDate('prev_year')"></i>
        <i class="button fa-solid fa-angle-left" @click="shiftCurrentDate('prev_month')"></i>
        <span>{{ props.current_date }}</span>
        <i class="button fa-solid fa-angle-right" @click="shiftCurrentDate('next_month')"></i>
        <i class="button fa-solid fa-angles-right" @click="shiftCurrentDate('next_year')"></i>
    </div>
</template>

<style scoped>
/* CurrentDate */
.current-date {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0.5rem;
    width: calc(7 * var(--cell-width));
}

.button {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0.25rem;
    padding: 0.25rem;
}

.button:hover {
    background-color: var(--color-prime);
}
</style>