<script setup>
import { FwbSpinner } from 'flowbite-vue'
import { defineProps } from 'vue';
defineProps({
    loading: Boolean
})
</script>

<template>
    <div v-if="loading" class="flex col-span-3 py-16 items-center justify-center">
        <fwb-spinner size="12" color="yellow" />
    </div>
</template>
