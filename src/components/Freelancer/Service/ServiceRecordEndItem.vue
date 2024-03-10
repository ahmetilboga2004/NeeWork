<script setup>
import { defineProps } from 'vue';
defineProps({
    message: String
})
</script>
<template>
    <div class="rounded-lg border-0 p-4 text-center font-bold text-xl text-green-700 bg-green-200">
        <h2>{{ message }}</h2>
    </div>
</template>