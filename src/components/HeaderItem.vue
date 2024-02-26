<script setup>
import { defineProps } from "vue"
defineProps({
    title: String,
    subTitle: String,
})
</script>

<template>
    <div class="p-4 flex flex-col h-fit mb-4 rounded-lg bg-white">
        <div class="mb-4">
            <h1 class="text-4xl font-extrabold font-kanit">{{ title }}</h1>
            <p class="text-stone-950 font-medium">
                {{ subTitle }}
            </p>
        </div>
        <div class="my-auto">
            <slot name="actionArea"></slot>
        </div>
    </div>
</template>