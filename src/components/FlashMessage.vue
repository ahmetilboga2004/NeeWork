<script setup>
import { useFlashStore } from "@/stores/flashMessage"
import { FwbToast } from 'flowbite-vue'
const store = useFlashStore()

</script>
<template>
    <fwb-toast class="fixed bottom-5 right-5" v-if="store.showFlashMessage" closable :type="store.type">
        {{ store.message }}
    </fwb-toast>
</template>