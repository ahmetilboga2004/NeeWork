<script setup>
import ServiceDetails from '@/components/Freelancer/Service/ServiceDetailsItem.vue'
import ServiceOffer from '@/components/Freelancer/Service/ServiceOfferItem.vue'
import ServiceComment from '@/components/Freelancer/Service/ServiceCommentItem.vue'
import getService from '@/services/Freelancer/getService'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'
const route = useRoute()
const error = ref('')
const service = ref({})
const updateServiceData = async (id) => {
    try {
        const response = await getService(id)
        if (response.success) {
            console.log(response.data.data)
            const data = await response.data.data
            service.value = {
                id: data.id,
                title: data.title,
                details: data.details,
                shortDesc: data.shortDesc,
                publishDate: moment(data.createdAt).format('YYYY-MM-DD'),
                price: data.price,
                popularity: data.popularity,
                rating: data.rating,
                likes: data.likes,
                user: {
                    id: data.user.id,
                    name: data.user.firstName,
                    surname: data.user.lastName,
                    username: data.user.username,
                    meslek: data.user.meslek || '',
                    role: data.user.role
                },
                freelancer: {
                    id: data.user.freelancer.id,
                    meslek: data.user.freelancer.meslek,
                    rating: data.user.freelancer.rating,
                    popularity: data.user.freelancer.popularity,
                    verify: data.user.freelancer.verify
                },
                comments: data.serviceComments.map((comment) => ({
                    id: comment.id,
                    comment: comment.comment,
                    rating: comment.rating,
                    user: {
                        name: comment.customer.user.firstName,
                        surname: comment.customer.user.lastName,
                        username: comment.customer.user.username
                    },
                    customer: {
                        verify: comment.customer.verify
                    }
                }))
            }
        } else {
            error.value = 'Üzgünüz, hizmet bulunamadı.'
        }
    } catch (err) {
        error.value = 'Bir hata oluştu.'
    }
}
watch(
    route,
    async () => {
        await updateServiceData(route.params.id)
    },
    { deep: true, immediate: true }
)
</script>

<template>
    <template v-if="error.length > 0">
        <div
            class="bg-red-400 rounded-lg font-semibold text-2xl flex items-center justify-center p-8"
        >
            <h2>Üzgünüz bakmak istediğiniz hizmeti bulamadık!</h2>
        </div>
    </template>

    <template v-else>
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-3 lg:col-span-2">
                <ServiceDetails :service="service" />
                <div class="bg-colorYellow rounded-lg mb-2 font-bold font-open text-black p-4">
                    Yorumlar
                </div>
                <ServiceComment v-if="service?.comments" :comments="service.comments" />
            </div>
            <div class="col-span-3 lg:col-span-1">
                <ServiceOffer
                    v-if="service?.user"
                    :isim="service.user.name"
                    :soyisim="service.user.surname"
                    :meslek="service.freelancer.meslek"
                />
            </div>
        </div>
    </template>
</template>
