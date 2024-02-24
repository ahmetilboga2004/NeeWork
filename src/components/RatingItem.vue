<script setup>
import { FwbRating } from 'flowbite-vue'
import { defineProps } from 'vue'
defineProps({
    point: Number
})
</script>
<template>
    <fwb-rating :rating="point" size="sm" />
</template>
