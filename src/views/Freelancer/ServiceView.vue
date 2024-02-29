<script setup>
import ServiceDetails from '@/components/Freelancer/ServiceDetailsItem.vue';
import { watch, ref } from 'vue';
import moment from "moment"
import { useRoute } from 'vue-router';
import getService from "@/services/Freelancer/getService"
const route = useRoute()
const error = ref({})
const service = ref({})
watch(route, async (newParam, oldParam) => {
    console.log(newParam, oldParam)
    const response = await getService(route.params.id)
    if (response.success) {
        const data = await response.data.data
        service.value = {
            id: data.id,
            title: data.title,
            details: data.details,
            shortDesc: data.shortDesc,
            publishDate: moment(data.createdAt).format("YYYY-MM-DD"),
            price: data.price,
            user: {
                id: data.user.id,
                fullName: data.user.firstName + " " + data.user.lastName,
                name: data.user.firstName,
                surname: data.user.lastName,
                username: data.user.username,
                meslek: data.user.meslek || "",
                role: data.user.role
            }
        }
    } else {
        error.value = response.error
    }
}, { deep: true, immediate: true })
</script>
<template>
    <div v-if="error.length > 0" class=" bg-red-400 rounded-lg font-semibold text-2xl flex items-center justify-center p-8">
        <h2>Üzgünüz bakmak istediğiniz hizmeti bulamadık!</h2>
    </div>

    <template v-else>
        <ServiceDetails :service="service" />
    </template>
</template>