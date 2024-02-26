<script setup>
import { defineProps } from "vue"


const props = defineProps({
    id: Number,
    publishDate: String,
    serviceHeader: String,
    shortDesc: String,
    price: Number,
    details: String
})

</script>

<template>
    <div class="card lg:h-max bg-white rounded-lg flex flex-col">
        <div>
            <div class="h-40 overflow-hidden">
                <img class="rounded-t-lg object-cover w-full h-full" src="@/assets/images/web-development.png"
                    alt="product image" />
            </div>
            <div class="mb-2 p-4">
                <div class="flex mb-3 justify-between items-center">
                    <div>
                        <div class="flex-shrink-0">
                            <img class="w-10 h-10 rounded-full" src="@/assets/images/profile.jpg" alt="Profile Photo" />
                        </div>
                        <div class="flex-1 ms-4">
                            <!-- <p class="text-sm font-medium truncate">{{ fullName }}</p>
                            <p class="text-sm font-medium truncate">{{ username }}</p> -->
                            <p class="text-sm font-mono truncate">{{ props.publishDate }}</p>
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
                <div class="mb-3">
                    <h5 class="text-lg font-bold tracking-tight text-gray-900">
                        {{ props.serviceHeader }}
                    </h5>
                    <p class="text-sm font-normal text-gray-700">
                        {{ props.shortDesc }}
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center p-4">
            <div class="text-lg bg-green-50 rounded-lg p-2 font-bold">
                <p class="px-2">
                    {{ props.price }}
                    <i class="fa-solid fa-turkish-lira-sign text-green-500 mr-2"></i>
                </p>
            </div>
            <div>
                <button
                    class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    :data-drawer-target="props.id" :data-drawer-show="props.id" data-drawer-placement="right"
                    :aria-controls="props.id">Detay</button>
            </div>
        </div>
    </div>
</template>