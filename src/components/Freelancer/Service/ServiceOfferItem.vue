<script setup>
import { defineProps } from 'vue';
const props = defineProps(["isim", "soyisim", "meslek"])
</script>

<template>

    <div class=" bg-slate-400 rounded-lg py-2 lg:py-4 px-4">
        <div class="flex flex-row justify-between lg:flex-col gap-4 lg:justify-center items-center">
            <div class="flex flex-row lg:flex-col items-center gap-4 lg:py-4">
                <img src="@/assets/images/profile.jpg" class="rounded-full h-10 w-10 lg:w-20 lg:h-20" alt="">
                <div class="lg:text-center">
                    <p class=" md:text-xl font-bold font-open">{{ props.isim }} {{ props.soyisim }}</p>
                    <p class=" text-sm md:text-base font-semibold font-open text-rose-700">{{ props.meslek }}</p>
                </div>
            </div>
            <div>
                <button class=" p-2 bg-colorYellow rounded-lg hover:bg-gold text-sm font-semibold border border-black
                text-black"><i class="fa-regular fa-paper-plane fa-lg lg:mr-2"></i><span
                        class=" hidden lg:inline">Mesaj
                        gönder</span></button>
            </div>
        </div>
    </div>

</template>