<script setup>
import { defineProps } from "vue";
import { FwbRating } from "flowbite-vue";
defineProps({
    service: Object
})
</script>

<template>
    <template v-if="service">
        <div class=" bg-white rounded-lg p-4 md:p-6 mb-4">
            <div class="text-2xl lg:text-3xl text-black font-bold mb-4 font-open">
                {{ service.title }}
            </div>
            <div class="text-sm font-bold text-gray-700">
                {{ service.publishDate }}
            </div>
        </div>
        <div class=" bg-white rounded-lg p-4 md:p-6 mb-4">
            <div class=" sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium">
                {{ service.details }}
            </div>
        </div>
        <div class=" bg-white rounded-lg p-4 md:p-6 mb-4">
            <div class="flex gap-4 flex-wrap items-center">
                <div class=" bg-green-200 font-bold p-2 px-4 rounded-lg">
                    <div class=" text-green-900">
                        <i class="fa-solid fa-turkish-lira-sign mr-1"></i> {{ service.price }}
                    </div>
                </div>
                <div v-if="service.popularity" class=" bg-orange-200 text-orange-900  font-bold p-2 px-4 rounded-lg">
                    <i class="fa-solid fa-fire mr-1"></i> Popüler
                </div>
                <div v-if="service.likes > 0" class=" bg-red-200 text-red-900  font-bold rounded-lg p-2 px-4">
                    <i class="fa-solid fa-heart mr-1"></i> {{ service.likes }}
                </div>
                <div v-if="service.rating" class=" bg-slate-200 rounded-lg text-slate-900  font-bold  p-2 px-4">
                    <FwbRating :rating="service.rating" size="md">
                        <template #besideText>
                            <span class="ml-2">{{ service.rating }}</span>
                        </template>
                    </FwbRating>
                </div>
            </div>
        </div>
    </template>

    <template v-else>
        <h1>YÜKLENİYOR...</h1>
    </template>

</template>