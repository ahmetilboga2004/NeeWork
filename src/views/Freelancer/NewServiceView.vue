<script setup>
import { onMounted, ref } from "vue"
import HeaderItem from "@/components/HeaderItem.vue";
import { useRouter } from "vue-router";
import newService from "@/services/Freelancer/newService";
import getSubCategories from "@/services/getSubCategories"
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore()
const router = useRouter()
const formDatas = ref({
    title: "",
    shortDesc: "",
    detailsDesc: "",
    price: "",
    subcategory: ""
})
const subcategories = ref([])

onMounted(async () => {
    const response = await getSubCategories()
    if (response.success) {
        const data = response.data.data
        subcategories.value = data
    } else {
        console.warn(response.error)
    }
})
const submitForm = async () => {
    const response = await newService(formDatas.value, authStore.user.id)
    if (response.success) {
        console.log("HİZMET KAYIT BAŞARILI", response.data)
        router.push("/")
    } else {
        console.error(response.error)
    }
}
</script>


<template>
    <HeaderItem title="Hizmet Yayınla"
        sub-title="Müşterilerin ihtiyaçlarına odaklanarak özel hizmet paketlerinizi sunun, işinizi büyütün." />
    <div class="p-4 lg:p-16 rounded-lg bg-white">
        <div class="mx-auto max-w-2xl">
            <form @submit.prevent="submitForm">
                <div class="grid gap-4 grid-cols-2 sm:gap-6 mb-3">
                    <div class="col-span-2">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Hizmet
                            Başlığı</label>
                        <input type="text" name="title" id="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Hizmet Başlığı" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="shortDesc" class="block mb-2 text-sm font-medium text-gray-900">Kısa
                            Açıklama
                            <span>(Min: 50 - Max: 250 karakter)</span></label>
                        <input type="text" minlength="50" maxlength="250" name="shortDesc" id="shortDesc"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Hizmet hakkında kısa bir açıklama yazın" required="">
                    </div>
                    <div class="md:w-full col-span-2">

                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Hizmet
                            Kategorisi</label>
                        <select id="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected="selected">Hizmet Kategorisini seçin</option>
                            <option v-for="category in subcategories" :key="category.id" :value="category.name">{{
                                category.name
                            }}</option>
                        </select>

                    </div>
                    <div class="md:w-full col-span-2">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Hizmet Bedeli
                        </label>
                        <input type="number" name="price" id="price" min="50" max="20000"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="1500 ₺" required="">
                    </div>

                    <div class="md:w-full col-span-2">
                        <label for="son-teslim-tarihi" class="block mb-2 text-sm font-medium text-gray-900">Tahmini Teslim
                            Tarihi</label>
                        <select id="son-teslim-tarihi"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected="selected">Son Teslim Tarihini seçin</option>
                            <option value="1-gun">1 Gün İçinde</option>
                            <option value="3-gun">3 Gün İçinde</option>
                            <option value="1-hafta">1 Hafta İçinde</option>
                            <option value="15-gun">15 Gün İçinde</option>
                            <option value="1-ay">1 Ay İçinde</option>
                            <option value="2-ay">2 Ay İçinde</option>
                            <option value="suresiz">Süre Kısıtlaması yok</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="details" class="block mb-2 text-sm font-medium text-gray-900">Detaylı Açıklama</label>
                        <textarea id="details"
                            class="block min-h-36 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Açıklamınızı detaylı ve anlaşılır bir şekilde yazınız lütfen."></textarea>
                    </div>
                </div>
                <div class="flex flex-row">

                    <button type="submit"
                        class="focus:outline-none flex items-center bg-navbar hover:bg-yellow-300 border border-black text-black focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs md:text-sm px-4 py-2 me-2 mb-2">
                        <span>Hizmeti Yayınla</span>
                        <img src="@/assets/images/logos/Untitled-1-03.svg" class=" h-8 w-8" alt="İlanı Yayınla" /></button>
                </div>
            </form>
        </div>
    </div>
</template>