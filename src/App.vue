<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import Datepicker from './components/Datepicker.vue';
import dayjs from 'dayjs';

const _date: Ref<Date, Date> = ref(new Date());
const _current_date = computed(() => {
  return dayjs(_date.value).format('L');
});
</script>

<template>
  {{ _current_date }}
  <hr />
  <Datepicker v-model="_date">
    <input :value="_current_date" />
  </Datepicker>
</template>

<style scoped></style>
