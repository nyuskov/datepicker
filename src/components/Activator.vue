<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['activate']);
const _main_element = ref(null);

function clicked(e: MouseEvent) {
    if (_main_element.value) {
        const rect = _main_element.value.getBoundingClientRect();
        emit('activate', rect.left, rect.bottom);
    }
    e.stopPropagation();
}
</script>

<template>
    <span ref="_main_element" @mousedown="clicked">
        <slot></slot>
    </span>
</template>