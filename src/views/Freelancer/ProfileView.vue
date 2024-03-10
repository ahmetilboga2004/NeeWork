<script setup>
import ProfileCard from '@/components/Freelancer/Profile/ProfileCardItem.vue'
import ProfileInfo from '@/components/Freelancer/Profile/ProfileInfoItem.vue'
import ProfileStatistic from '@/components/Freelancer/Profile/ProfileStatisticItem.vue'
import ProfileMenuTab from '@/components/Freelancer/Profile/ProfileMenuTabItem.vue'
import ProfileArea from '@/components/Freelancer/Profile/ProfileAreaItem.vue'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import getFreelancer from '@/services/Freelancer/getFreelancer'
const route = useRoute()
const error = ref({})
const freelancer = ref({})
watch(
    route,
    async (newParam, oldParam) => {
        console.log(newParam, oldParam)
        const response = await getFreelancer(route.params.username)
        if (response.success) {
            const data = await response.data.data
            freelancer.value = {
                id: data.id,
                fullName: `${data.firstName} ${data.lastName}`,
                username: data.username,
                name: data.firstName,
                surname: data.lastName,
                meslek: data.freelancer.meslek,
                verify: data.freelancer.verify,
                popularity: data.freelancer.popularity,
                rating: data.freelancer.rating,
                category: data.freelancer.category.name,
                services: data.freelancer.services
            }
        } else {
            error.value = response.error
        }
    },
    { deep: true, immediate: true }
)
</script>
<template>
    <div class="flex flex-col gap-4 lg:flex-row">
        <div id="user-area" class="lg:basis-1/3">
            <Suspense>
                <ProfileCard
                    :full-name="freelancer.fullName"
                    :meslek="freelancer.meslek"
                    :verify="freelancer.verify"
                />
            </Suspense>
            <div id="user-profile-tab-content" class="mb-4">
                <ProfileInfo :hizmet-category="freelancer.category" />
                <ProfileStatistic />
            </div>
        </div>
        <div id="profile-area" class="w-full">
            <ProfileMenuTab />
            <Suspense>
                <ProfileArea :services="freelancer.services" />
            </Suspense>
        </div>
    </div>
</template>
