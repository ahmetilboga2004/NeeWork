<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
import newService from "@/services/Freelancer/newService";
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
    <div class="bg-white rounded-lg border-0 p-4">
        <div>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="title">Hizmet Başlığı</label>
                    <input type="text" name="title" id="title" v-model="formDatas.title" placeholder="Hizmet Başlığı">
                </div>
                <div>
                    <label for="shortDesc">Kısa Açıklama: </label>
                    <input type="text" name="shortDesc" id="shortDesc" v-model="formDatas.shortDesc"
                        placeholder="Kısa bir açıklama giriniz">
                </div>
                <div>
                    <label for="detailsDesc">Detaylı Açıklama: </label>
                    <input type="text" name="detailsDesc" v-model="formDatas.detailsDesc" id="detailsDesc">
                </div>
                <div>
                    <label for="price">Hizmet bedeli: </label>
                    <input type="text" name="price" v-model="formDatas.price" id="price">
                </div>
                <div>
                    <label for="subcategory">Alt Kategori: </label>
                    <select name="subcategory" id="subcategory" v-model="formDatas.subcategory">
                        <option value="masaüstü">Masaüstü</option>
                        <option value="mobil">Mobil</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Servisi Kayıt et</button>
                </div>
            </form>
        </div>
    </div>
</template>