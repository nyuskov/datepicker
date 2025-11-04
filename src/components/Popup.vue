<script setup lang="ts">
import { defineModel, ref } from 'vue';

const _model = defineModel<Boolean>();
const _popup_frame = ref(null);
const props = defineProps({
    popup_style: Object
});

function closePopup(e: PointerEvent) {
    if (_popup_frame.value) {
        if (!_popup_frame.value.contains(e.target)) {
            _model.value = false;
            e.stopPropagation();
        }
    }
}
</script>

<template>
    <div class="popup-wrapper" v-if="_model" @click="closePopup">
        <div class="popup-frame" ref="_popup_frame" :style="popup_style">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.popup-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5000;
}

.popup-frame {
    border: 1px solid var(--color-background);
    box-shadow: 4px 4px 0 0 rgba(80, 80, 80, 0.2);
    filter: brightness(75%);
    padding: 0.5rem;
    position: fixed;
    z-index: 5001;
}
</style>