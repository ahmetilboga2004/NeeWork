<script setup>
import HeaderItem from '@/components/HeaderItem.vue';
import ServiceItem from '@/components/Freelancer/ServiceItem.vue';
import getAllServices from "@/services/Freelancer/getAllServices";
import HeaderAreaForm from '@/components/Customer/HeaderAreaForm.vue';
import { FwbSpinner } from 'flowbite-vue'
import { useServicesStore } from "@/stores/freelancerServices"
import { ref, onMounted } from "vue"
const serviceStore = useServicesStore()
const loading = ref(true)
const title = ref("Hizmet Ara");
const subTitle = ref("Yeteneklere göre yada hizmet kategorisine göre arayın. Aradığınız hizmeti anında bulun");
onMounted(async () => {
    const response = await getAllServices()
    if (response.success) {
        serviceStore.allServices = await response.data.data
        setTimeout(() => {
            loading.value = false
        }, 3000)
        console.log(serviceStore.allServices)
    } else {
        console.log(response.error)
    }
})

</script>

<template>
    <HeaderItem :title="title" :sub-title="subTitle">
        <template #actionArea>
            <HeaderAreaForm></HeaderAreaForm>
        </template>
    </HeaderItem>
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <template v-if="loading">
            <div class="flex py-96 items-center justify-center">
                <fwb-spinner size="12" color="yellow" />
            </div>
        </template>
        <template v-else>
            <ServiceItem v-for="service in serviceStore.allServices" :key="service.id" :id="service.id"
                :service-header="service.title" :short-desc="service.shortDesc" :price="service.price"
                :publish-date="service.createdAt" :details="service.details" />
        </template>
    </div>
</template>