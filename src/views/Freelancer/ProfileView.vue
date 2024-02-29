<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import getFreelancer from '@/services/Freelancer/getFreelancer';
const route = useRoute()
const error = ref({})
const freelancer = ref({})
watch(route, async (newParam, oldParam) => {
    console.log(newParam, oldParam)
    const response = await getFreelancer(route.params.username)
    if (response.success) {
        const data = await response.data.data
        freelancer.value = {
            id: data.id,
            username: data.username,
            name: data.firstName,
            surname: data.lastName,
        }
    } else {
        error.value = response.error
    }
}, { deep: true, immediate: true })
</script>
<template>
    <h1>Freelancer Profile page</h1>
    <div class=" bg-white rounded-lg p-4 my-4">
        {{ freelancer }}
    </div>
    <h2>Bu sayfada freelancerin profili görüp düzenleyeceği yerdir</h2>
    <h3>Ayrıca Müşteriler bu sayfayı görüntülediklerinde freelancerin profilin görebilecek</h3>
</template>