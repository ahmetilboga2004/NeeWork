<script setup>
import { defineProps } from "vue"
const props = defineProps({
    role: String
})
const getText = () => {
    return props.role === "freelancer" ? "Popüler İş İlanları" : "Popüler Hizmetler"
}

</script>

<template>
    <div class=" bg-colorYellow rounded-lg mb-4 font-bold font-open text-black p-4">
        <i class="fa-solid fa-fire-flame-curved mr-2"></i>
        {{ getText() }}
    </div>
</template>