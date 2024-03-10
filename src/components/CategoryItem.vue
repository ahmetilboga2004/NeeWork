<script setup>
import {
    FwbRadio,
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel
} from 'flowbite-vue'
import moment from 'moment'
import { ref } from 'vue'
import { useServicesStore } from '@/stores/freelancerServices'
import filterService from '@/services/Freelancer/filterService'

const serviceStore = useServicesStore()
const maxError = ref(false)

const formDatas = ref({
    min: 50,
    max: 20000,
    yayinlanmaTarihi: Number,
    tahminiTeslimTarihi: Number,
    popularity: Boolean
})

const validateMin = () => {
    maxError.value = false
    if (formDatas.value.min < 50) {
        formDatas.value.min = 50
    } else if (formDatas.value.min > 20000) {
        formDatas.value.min = 20000
    } else if (formDatas.value.min > formDatas.value.max) {
        maxError.value = true
    }
}
const validateMax = () => {
    maxError.value = false
    if (formDatas.value.max < 50) {
        formDatas.value.max = 50
    } else if (formDatas.value.max > 20000) {
        formDatas.value.max = 20000
    } else if (formDatas.value.max < formDatas.value.min) {
        maxError.value = true
    }
}

const submitForm = async () => {
    const response = await filterService(formDatas)
    if (response.success) {
        const data = await response.data.data
        serviceStore.allServices = data.map((service) => ({
            id: service.id,
            title: service.title,
            shortDesc: service.shortDesc,
            details: service.details,
            price: service.price,
            status: service.status,
            publishDate: moment(service.createdAt).format('DD-MM-YYYY'),
            updatedAt: service.updatedAt,
            user: {
                id: service.user.id,
                meslek: service.user.meslek,
                fullName: `${service.user.firstName} ${service.user.lastName}`,
                email: service.user.email,
                username: service.user.username,
                role: service.user.role,
                createdAt: moment(service.user.createdAt).format('DD-MM-YYYY'),
                updatedAt: service.user.updatedAt
            }
        }))
        console.log(data)
    } else {
        console.log(response.error)
    }
}
</script>

<template>
    <div id="kategori" class="rounded-lg lg:w-[30vh] lg:sticky lg:top-[100px] bg-white">
        <div
            class="text-center w-full p-4 rounded-t-lg bg-navbar mb-4 font-bold text-gray-800 text-2xl"
        >
            Kategori
        </div>

        <form novalidate @submit.prevent="submitForm">
            <div class="grid gap-4 p-3">
                <fwb-accordion>
                    <fwb-accordion-panel>
                        <fwb-accordion-header
                            ><span>
                                <i class="fa-solid fa-fire"></i>
                                Popülerlik</span
                            >
                        </fwb-accordion-header>
                        <fwb-accordion-content class="transition delay-200 duration-300">
                            <div class="mb-4">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="formDatas.popularity"
                                        class="sr-only peer"
                                    />
                                    <div
                                        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                    ></div>
                                    <span
                                        class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Popüler</span
                                    >
                                </label>
                            </div>
                        </fwb-accordion-content>
                    </fwb-accordion-panel>
                    <fwb-accordion-panel>
                        <fwb-accordion-header
                            ><span>
                                <i class="fa-solid fa-calendar-days"></i>
                                Yayınlanma Tarihi</span
                            >
                        </fwb-accordion-header>
                        <fwb-accordion-content>
                            <div class="mb-4">
                                <fwb-radio
                                    v-model="formDatas.yayinlanmaTarihi"
                                    name="yayinlanmaTarihi"
                                    label="Bugün"
                                    value="1"
                                />
                                <fwb-radio
                                    v-model="formDatas.yayinlanmaTarihi"
                                    name="yayinlanmaTarihi"
                                    label="3 Gün Önce"
                                    value="3"
                                />
                                <fwb-radio
                                    v-model="formDatas.yayinlanmaTarihi"
                                    name="yayinlanmaTarihi"
                                    label="1 Hafta Önce"
                                    value="7"
                                />
                                <fwb-radio
                                    v-model="formDatas.yayinlanmaTarihi"
                                    name="yayinlanmaTarihi"
                                    label="1 Ay Önce"
                                    value="30"
                                />
                            </div>
                        </fwb-accordion-content>
                    </fwb-accordion-panel>
                    <fwb-accordion-panel>
                        <fwb-accordion-header>
                            <span>
                                <i class="fa-solid fa-flag-checkered"></i>
                                Tahmini Teslim Süresi</span
                            ></fwb-accordion-header
                        >
                        <fwb-accordion-content>
                            <div class="mb-4">
                                <fwb-radio
                                    v-model="formDatas.tahminiTeslimTarihi"
                                    name="tahminiTeslimTarihi"
                                    label="Bugün"
                                    value="1"
                                />
                                <fwb-radio
                                    v-model="formDatas.tahminiTeslimTarihi"
                                    name="tahminiTeslimTarihi"
                                    label="3 Gün İçinde"
                                    value="3"
                                />
                                <fwb-radio
                                    v-model="formDatas.tahminiTeslimTarihi"
                                    name="tahminiTeslimTarihi"
                                    label="1 Hafta İçinde"
                                    value="7"
                                />
                                <fwb-radio
                                    v-model="formDatas.tahminiTeslimTarihi"
                                    name="tahminiTeslimTarihi"
                                    label="1 Ay İçinde"
                                    value="30"
                                />
                                <fwb-radio
                                    v-model="formDatas.tahminiTeslimTarihi"
                                    name="tahminiTeslimTarihi"
                                    label="2 Ay İçinde"
                                    value="60"
                                />
                            </div>
                        </fwb-accordion-content>
                    </fwb-accordion-panel>
                    <fwb-accordion-panel>
                        <fwb-accordion-header>
                            <span>
                                <i class="fa-solid fa-sack-dollar"></i>
                                Hizmet Fiyatı
                            </span>
                        </fwb-accordion-header>
                        <fwb-accordion-content>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label for="min"
                                        ><span class="text-gray-800 text-xs font-semibold mb-1"
                                            >En Az</span
                                        ></label
                                    >
                                    <input
                                        type="number"
                                        inputmode="numeric"
                                        name="min"
                                        id="min"
                                        min="50"
                                        max="20000"
                                        v-model="formDatas.min"
                                        @blur="validateMin()"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="En az"
                                    />
                                </div>
                                <div>
                                    <label for="max"
                                        ><span class="text-gray-800 text-xs font-semibold mb-1"
                                            >En Çok</span
                                        ></label
                                    >
                                    <input
                                        type="number"
                                        inputmode="numeric"
                                        name="max"
                                        id="max"
                                        min="50"
                                        max="20000"
                                        v-model="formDatas.max"
                                        @blur="validateMax()"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="En fazla"
                                    />
                                </div>

                                <small v-if="maxError" class="col-span-2 text-red-600"
                                    >Max değeri Min değerinden küçük olamaz!</small
                                >
                            </div>
                        </fwb-accordion-content>
                    </fwb-accordion-panel>
                </fwb-accordion>
                <div class="flex flex-row mb-4 gap-2 justify-between items-center mt-8">
                    <button
                        type="submit"
                        :disabled="maxError"
                        :class="!maxError ? 'hover:bg-gold bg-colorYellow' : ' bg-gray-300'"
                        class="transition delay-100 duration-500 flex-grow py-2 px-4 rounded-lg border border-black text-black"
                    >
                        Filtrele
                    </button>
                    <button
                        @click="maxError = false"
                        class="transition delay-100 duration-500 flex-grow bg-orange-400 hover:bg-orange-500 py-2 border-black rounded-lg border text-black px-4"
                        type="reset"
                    >
                        Sıfırla
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
