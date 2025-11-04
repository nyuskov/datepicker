<template>
    <div class="calendar">
        <div v-for="(day, index) in _month" :key="index" class="cell"
            :class="{ dimmed: !day.same_month, current: day.current }" @click="update(day.date)">
            {{ day.day_of_month }}
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { computed } from 'vue';
import { defineModel } from 'vue';

const _model = defineModel<Date>();
const _date = computed(() => {
    return dayjs(_model.value);
});
const _month = computed(() => {
    const start: dayjs.Dayjs = _date.value.startOf('month').startOf('week');
    const end: dayjs.Dayjs = _date.value.endOf('month').endOf('week');
    const days: number = Math.ceil(end.diff(start, 'day', true));
    const result = [];
    for (let i = 0; i < days; i++) {
        const date: dayjs.Dayjs = start.add(i, 'day');
        const same_month: boolean = date.isSame(_date.value, 'month');
        const current: boolean = date.isSame(_date.value, 'day');
        const day_of_month: number = date.date();
        result.push({
            date,
            same_month,
            current,
            day_of_month,
        });
    }
    return result;
});

function update(date: dayjs.Dayjs) {
    _model.value = date.toDate();
};
</script>