<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    fullName: String,
    meslek: String,
    verify: Boolean
})
</script>

<template>
    <div class="mb-4 bg-white rounded-lg">
        <div class="flex justify-end px-4 pt-4">
            <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                type="button"
            >
                <span class="sr-only">Open dropdown</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewbox="0 0 16 3"
                >
                    <path
                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
                    />
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div
                id="dropdown"
                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
                <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                        <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Düzenle</a
                        >
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Ayarlar</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col items-center pb-10">
            <img
                class="w-24 h-24 mb-3 rounded-full"
                src="@/assets/images/profile.jpg"
                alt="Profile Image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900">
                {{ props.fullName }}
                <i v-if="props.verify" class="fa-solid fa-circle-check text-verify"></i>
            </h5>
            <span class="text-gray-500 mb-4">{{ props.meslek }}</span>
            <ul
                class="flex flex-wrap justify-center text-base lg:text-lg md:font-medium text-center"
                id="uesr-profile-tab"
                data-tabs-toggle="#user-profile-tab-content"
                role="tablist"
            >
                <li class="me-2 text-black" role="presentation">
                    <button
                        data-tabs-target="#kisisel-bilgiler"
                        type="button"
                        role="tab"
                        aria-controls="kisisel-bilgiler"
                        aria-selected="false"
                        class="action-btn text-sm py-2 px-4 font-medium text-center text-black bg-colorYellow rounded-lg hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300"
                    >
                        Kişisel
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        data-tabs-target="#istatistik-bilgiler"
                        type="button"
                        role="tab"
                        aria-controls="istatistik-bilgiler"
                        aria-selected="false"
                        class="action-btn text-sm py-2 px-4 font-medium text-center text-black bg-gray rounded-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300"
                    >
                        İstatistik
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
