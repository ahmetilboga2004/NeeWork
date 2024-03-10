<script setup>
import ServiceItem from '@/components/Freelancer/Service/ServiceItem.vue'
import JobItem from '@/components/Customer/JobItem.vue'
import HomeInterTitle from '@/components/HomeInterTitleItem.vue'
import HomeLoading from '@/components/HomeLoadingItem.vue'
import getPopularServices from '@/services/Freelancer/getPopularServices'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import moment from 'moment'
import { useServicesStore } from '@/stores/freelancerServices'
import getPopularJobs from '@/services/Customer/getPopularJobs'
import { useJobsStore } from '@/stores/jobServices'
import { useAuthStore } from '@/stores/auth'
import { ref, onMounted } from 'vue'
const authStore = useAuthStore()
const jobStore = useJobsStore()
const serviceStore = useServicesStore()
const loading = ref(true)
import { initFlowbite } from 'flowbite'

const breakpoints = ref({
    // MD
    768: {
        itemsToShow: 1,
        snapAlign: 'start'
    },
    // LG
    1024: {
        itemsToShow: 2,
        snapAlign: 'center'
    },
    // 2.5 XL
    1845: {
        itemsToShow: 2.5,
        snapAlign: 'center'
    }
})

const veriYok = ref('')

onMounted(async () => {
    initFlowbite()
    await authStore.checkAuth()
    console.log(authStore.user)
    if (authStore.user?.role === 'customer' || !authStore.user) {
        console.log('USER ROLE HOME 43: ', authStore.user?.role)
        if (serviceStore.allServices.length < 1) {
            const response = await getPopularServices()
            if (response.success) {
                const data = response.data.data
                console.log('DATA : ', data)
                serviceStore.popularServices = data.map((service) => ({
                    id: service.id,
                    title: service.title,
                    shortDesc: service.shortDesc,
                    details: service.details,
                    price: service.price,
                    status: service.status,
                    publishDate: moment(service.createdAt).format('DD-MM-YYYY'),
                    updatedAt: moment(service.updatedAt).format('DD-MM-YYYY'),
                    user: {
                        id: service.user.id,
                        meslek: service.user.meslek,
                        fullName: `${service.user.firstName} ${service.user.lastName}`,
                        email: service.user.email,
                        username: service.user.username,
                        role: service.user.role,
                        createdAt: moment(service.user.createdAt).format('DD-MM-YYYY'),
                        updatedAt: moment(service.user.updatedAt).format('DD--MM-YYYY')
                    }
                }))
                setTimeout(() => {
                    loading.value = false
                }, 3000)
                console.log(serviceStore.popularServices)
            } else {
                console.log(response.error)
                loading.value = false
                veriYok.value = 'Üzgünüz şuanda görüntülenecek popüler hizmet yok'
            }
        } else {
            loading.value = false
        }
    } else if (authStore.user?.role === 'freelancer') {
        if (jobStore.allJobs.length < 1) {
            const response = await getPopularJobs()
            if (response.success) {
                const data = response.data.data
                jobStore.popularJobs = data.map((job) => ({
                    id: job.id,
                    title: job.title,
                    shortDesc: job.shortDesc,
                    details: job.details,
                    price: job.price,
                    status: job.status,
                    publishDate: moment(job.createdAt).format('DD-MM-YYYY'),
                    updatedAt: moment(job.updatedAt).format('DD-MM-YYYY'),
                    user: {
                        id: job.user.id,
                        fullName: `${job.user.firstName} ${job.user.lastName}`,
                        email: job.user.email,
                        username: job.user.username,
                        role: job.user.role,
                        createdAt: moment(job.user.createdAt).format('DD-MM-YYYY'),
                        updatedAt: moment(job.user.updatedAt).format('DD--MM-YYYY')
                    }
                }))
                setTimeout(() => {
                    loading.value = false
                }, 3000)
            } else {
                console.log(response.error)
                loading.value = false
                veriYok.value = 'Üzgünüz şuanda görüntülenecek popüler iş ilanı yok'
            }
        } else {
            loading.value = false
        }
    }
})
</script>

<template>
    <div class="flex flex-col-reverse xl:flex-row gap-4">
        <div class="basis-2/3">
            <div class="bg-colorYellow rounded-lg mb-4 font-bold font-open text-black p-4">
                <i class="fa-solid fa-chart-simple mr-2"></i> Güncel Veriler
            </div>
            <div class="flex flex-wrap mb-8 gap-4 font-semibold text-base">
                <div class="bg-yellow-200 rounded-lg p-4">
                    <i class="fa-solid fa-house-laptop mr-2"></i> 25 Hizmet Teslim Edildi
                </div>
                <div class="bg-green-200 rounded-lg p-4">
                    <i class="fa-solid fa-briefcase mr-2"></i> 48 İş İlanı Tamamlandı
                </div>
                <div class="bg-orange-200 rounded-lg p-4">
                    <i class="fa-solid fa-id-badge mr-2"></i> 18 Freelancer
                </div>
                <div class="bg-red-200 rounded-lg p-4">
                    <i class="fa-solid fa-fire mr-2"></i> 10 Popüler Freelancer
                </div>
                <div class="bg-purple-200 rounded-lg p-4">
                    <i class="fa-solid fa-user-group mr-2"></i> 26 Müşteri
                </div>
                <div class="bg-blue-200 rounded-lg p-4">
                    <i class="fa-solid fa-comment mr-2"></i> 230 Yorum
                </div>
            </div>
            <HomeInterTitle :role="authStore.user?.role ? authStore.user?.role : ''" />
            <HomeLoading :loading="loading" />

            <template v-if="!loading">
                <carousel
                    v-if="authStore.user?.role === 'customer' || !authStore.user"
                    :breakpoints="breakpoints"
                    :transition="500"
                    :wrap-around="serviceStore.popularServices.length > 3 ? true : false"
                >
                    <slide v-for="service in serviceStore.popularServices" :key="service.id">
                        <ServiceItem :service="service" />
                    </slide>

                    <template #addons>
                        <navigation v-if="serviceStore.popularServices.length > 1" />
                        <pagination v-if="serviceStore.popularServices.length > 1" />
                    </template>
                </carousel>

                <carousel
                    v-else-if="authStore.user?.role === 'freelancer'"
                    :breakpoints="breakpoints"
                    :transition="500"
                    :wrap-around="jobStore.popularJobs.length > 3 ? true : false"
                >
                    <slide v-for="job in jobStore.popularJobs" :key="job.id">
                        <JobItem :job="job" />
                    </slide>

                    <template #addons>
                        <navigation v-if="jobStore.popularJobs.length > 1" />
                        <pagination v-if="jobStore.popularJobs.length > 1" />
                    </template>
                </carousel>

                <div
                    v-if="veriYok.length > 0"
                    class="bg-orange-300 md:mx-20 lg:mx-32 xl:mx-36 rounded-lg p-4 font-bold text-center text-lg"
                >
                    {{ veriYok }}
                </div>
            </template>
        </div>

        <div class="basis-1/3">
            <div class="bg-colorYellow p-4 font-bold text-black rounded-lg mb-4">
                <i class="fa-solid fa-bullhorn mr-2"></i> Duyurular
            </div>
            <div class="bg-fuchsia-200 p-10 rounded-lg mb-4">
                <h2>Yeni Özellikler Geldi..</h2>
            </div>
            <div class="bg-fuchsia-200 p-10 rounded-lg mb-4">
                <h2>Sizler için...</h2>
            </div>
        </div>
    </div>
</template>
