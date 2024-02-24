<script setup>
import ServiceItem from "@/components/Freelancer/ServiceItem.vue";
import getAllServices from "@/services/Freelancer/getAllServices";
import HeaderItem from '@/components/HeaderItem.vue';
import moment from 'moment'


import { ref, onMounted } from "vue"

import { useRouter } from 'vue-router';
const router = useRouter()
const logout = async () => {
    try {
        const response = await fetch("http://localhost:3000/auth/logout", {
            credentials: "include"
        })
        const data = await response.json()
        if (response.ok) {
            console.log("Çıkış işlemi başarılı bir şekilde gerçekleşti", data)
            router.push("/login")
        } else {
            console.warn("Çıkış işlemi başarısız oldu: ", data)
        }
    } catch (error) {
        console.error(error)
    }
}


const services = ref({})
const error = ref(null)
const loading = ref(true)
const title = ref("Hizmet Ara")
const subTitle = ref("Yeteneklere göre yada hizmet kategorisine göre arayın. Aradığınız hizmeti anında bulun")
onMounted(async () => {
    const response = await getAllServices()
    if (response.success) {
        services.value = await response.data.data.map((service) => ({
            id: service.id,
            userId: service.userId,
            publishDate: moment(service.createdAt).format('YYYY-MM-DD'),
            serviceHeader: service.title,
            shortDesc: service.shortDesc,
            detailDesc: service.details,
            price: service.price,
        }));
        console.log(services.value)
        loading.value = false
    } else {
        error.value = response.error
        console.log("RESPONSE ERROR: ", response.error)
    }
})
</script>
<template>
    <HeaderItem :title="title" :sub-title="subTitle" />
    <button @click="logout" class=" text-4xl font-open font-bold bg-gray-800"> Çıkış Yap </button>

    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <template v-for="service in services" :key="service.id">
            <ServiceItem :service="service" />
        </template>
    </div>
</template>