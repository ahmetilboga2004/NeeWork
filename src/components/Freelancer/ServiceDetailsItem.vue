<script setup>
import { defineProps } from "vue"
import { FwbRating } from "flowbite-vue";
import ServiceOffer from "./ServiceOfferItem.vue";
defineProps({
    service: Object,
})
</script>
<template>
    <div class=" bg-white rounded-lg p-4 mb-4 mt-4">
        <div class=" text-2xl text-black font-bold mb-4 font-roboto">
            {{ service.title }}
        </div>
        <div class="py-2 text-xs text-gray-700">
            {{ service.publishDate }}
        </div>
    </div>
    <div class=" bg-white rounded-lg p-4 mb-4">
        <div class=" text-lg text-gray-800 font-medium">
            {{ service.details }}
        </div>
    </div>
    <div class=" bg-white rounded-lg p-4 mb-4">
        <div class="flex gap-4 flex-wrap items-center">
            <div class=" bg-green-200 text-sm font-bold p-2 rounded-lg">
                <div class=" text-green-600">
                    {{ service.price }} ₺
                </div>
            </div>
            <div v-if="service.popularity" class=" bg-orange-200 text-sm p-2 rounded-lg">
                Popüler
            </div>
            <div v-if="service.likes > 0" class=" bg-red-200 text-sm rounded-lg p-2">
                {{ service.likes }} Beğeni
            </div>
            <div v-if="service.rating" class=" bg-slate-200 text-sm rounded-lg p-2">
                <FwbRating :rating="service.rating" size="sm"></FwbRating>
            </div>
        </div>
    </div>
    <ServiceOffer :fullName="service.user.fullName" :meslek="service.user.meslek"></ServiceOffer>
</template>