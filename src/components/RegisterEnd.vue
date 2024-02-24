<script setup>
import { defineProps } from 'vue';
defineProps({
    svgIcon: String,
    message: String,
    messageDetail: String
})
</script>
<template>
    <div class="flex justify-center items-center mb-4">
        <div class="flex text-center flex-col items-center">
            <div :class="svgIcon" class="flex justify-center items-center p-4 rounded-full mb-3 opacity-75">
                <img src="@/assets/images/logos/Untitled-1-04.svg" class="w-32 h-32 rotate-35" :alt="message" />
            </div>
            <h2 class="text-4xl font-bold text-green-700 mb-2">
                {{ message }}
            </h2>
            <h3 class="text-lg font-bold text-green-600">
                {{ messageDetail }}
            </h3>
        </div>
    </div>
</template>