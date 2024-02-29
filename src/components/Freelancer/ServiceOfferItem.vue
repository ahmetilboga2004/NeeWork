<script setup>
import { defineProps } from 'vue';
defineProps({
    fullName: String,
    meslek: String
})
</script>
<template>
    <div class="sticky bottom-4">

        <div class=" bg-slate-400 rounded-lg shadow-xl py-2 px-4 mx-4 md:mx-20 lg:mx-48 xl:mx-96">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <img src="@/assets/images/profile.jpg" class="rounded-full h-10 w-10" alt="">
                    <div>
                        <p class=" text-base font-bold font-open">{{ fullName }}</p>
                        <p class=" text-sm font-semibold text-gray-900">{{ meslek }}</p>
                    </div>
                </div>
                <div>
                    <button
                        class="p-2 bg-colorYellow rounded-lg hover:bg-gold text-sm font-semibold border border-black text-black">Mesaj
                        Gönder</button>
                </div>
            </div>
        </div>

    </div>
</template>