<script setup lang="ts">
const props = defineProps({
    language: String,
});
const locale_weeks = {
    'en': [
        "Sun", "Mon", "Tue",
        "Wed", "Thu", "Fri", "Sat"],
    'рус': [
        "Вс", "Пн", "Вт",
        "Ср", "Чт", "Пт", "Сб"]
};
</script>

<template>
    <div class="days">
        <div class="cell" v-for="(day, index) in locale_weeks[props.language]" :key="index">
            {{ day }}
        </div>
    </div>
</template>

<style scoped>
.days {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.cell {
    align-items: center;
    justify-content: center;
    display: flex;
    height: var(--cell-height);
    width: var(--cell-width);
}
</style>