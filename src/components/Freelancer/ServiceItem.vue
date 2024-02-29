<script setup>
import { defineProps } from "vue"

defineProps({
    service: Object
})


</script>

<template>
    <div
        class="card lg:h-max bg-white hover:cursor-pointer hover:bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300  rounded-lg flex flex-col">
        <div>
            <div class="h-40 overflow-hidden">
                <RouterLink :to="{ name: 'service', params: { username: service.user.username, id: service.id } }">
                    <img class="rounded-t-lg object-cover w-full h-full" src="@/assets/images/web-development.png"
                        alt="product image" />
                </RouterLink>

            </div>
            <div class="mb-2 p-4">
                <div class="mb-3 flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <img class="w-10 h-10 rounded-full" src="@/assets/images/profile.jpg" alt="">
                        <div class="font-medium">

                            <div>{{ service.user.fullName }}</div>
                            <RouterLink
                                :to="{ name: 'service', params: { username: service.user.username, id: service.id } }">
                                <div class="text-sm text-gray-500 dark:text-gray-400">@{{ service.user.username }}</div>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="action-icons text-2xl font-semibold flex">
                        <button type="button" class="text-green-700 mr-2">
                            <i class="fa-regular fa-bookmark hover:bg-text-green-700 "></i>
                        </button>
                        <button type="button" class="text-red-700 ">
                            <i class="fa-regular fa-heart hover:bg-text-red-700 "></i>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ service.publishDate }}</div>
                </div>
                <div class="mb-3">
                    <h5 class="text-lg font-bold tracking-tight text-gray-900">
                        {{ service.title }}
                    </h5>
                    <p class="text-sm font-normal text-gray-700">
                        {{ service.shortDesc }}
                    </p>
                </div>
            </div>
        </div>
        <div class="inline-flex items-center p-4">
            <div class="text-lg bg-green-100 rounded-lg p-2 block font-bold">
                <p class="px-2">
                    {{ service.price }}
                    <i class="fa-solid fa-turkish-lira-sign text-green-700 mr-2"></i>
                </p>
            </div>
        </div>
    </div>
</template>