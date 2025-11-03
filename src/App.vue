<script setup lang="ts">
import dayjs from 'dayjs';
import { computed } from 'vue';
import Calendar from './components/Calendar.vue';

const date: Date = new Date();
const _current_date = computed(() => {
  return dayjs(date).format('L');
});
</script>

<template>
  {{ _current_date }}
  <hr />
  <Calendar v-model="date" />
</template>

<style scoped></style>
