<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, ref, type Ref } from 'vue';
import Calendar from './components/Calendar.vue';

const _date: Ref<Date, Date> = ref(new Date());
const _current_date = computed(() => {
  return dayjs(_date.value).format('L');
});
</script>

<template>
  {{ _current_date }}
  <hr />
  <Calendar v-model="_date" />
</template>

<style scoped></style>
