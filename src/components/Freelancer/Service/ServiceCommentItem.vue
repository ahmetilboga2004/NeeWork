<script setup>
import { FwbRating } from 'flowbite-vue';
import { defineProps } from 'vue';
defineProps({
    comments: Array
})
</script>

<template>
    <template v-if="comments.length > 0">

        <template v-for="comment in comments" :key="comment.id">

            <div class="bg-white rounded-lg p-4 md:p-6 mb-4">

                <div class="flex items-center gap-4 mb-2">
                    <img alt="Man"
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        class="h-14 w-14 rounded-full object-cover" />

                    <div>
                        <p class="mt-0.5 text-base md:text-lg font-medium text-gray-900">{{ comment.user.name }} {{
        comment.user.surname }}
                            <i v-if="comment.customer.verify" class="fa-solid fa-circle-check text-blue-600"></i>
                        </p>
                        <FwbRating :rating="comment.rating" size="sm" />
                    </div>
                </div>
                <div class="mt-2 py-2">
                    <p class=" text-gray-700 text-sm md:text-base">
                        {{ comment.comment }}
                    </p>
                </div>

            </div>
        </template>
    </template>

    <template v-else>
        <div class="text-center font-bold text-xl text-red-500 py-4"> Yorum yok</div>
    </template>
</template>