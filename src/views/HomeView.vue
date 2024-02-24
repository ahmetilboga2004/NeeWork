<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const logout = async () => {
    try {
        const response = await fetch("http://localhost:3000/auth/logout", {
            credentials: "include"
        })
        const data = await response.json()
        if (response.ok) {
            console.log("Çıkış işlemi başarılı bir şekilde gerçekleşti", data)
            router.push("/login")
        } else {
            console.warn("Çıkış işlemi başarısız oldu: ", data)
        }
    } catch (error) {
        console.error(error)
    }
}

const getServices = async () => {
    try {
        const response = await fetch("http://localhost:3000/service/", {
            credentials: "include"
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            console.log("Servis bilgleri getirildi")
        } else {
            console.log(data)
            console.warn("Servis bilgileri getirilemedi")
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <div>
        <h1>Burası ana sayfa</h1>
        <button @click="logout" class=" text-4xl font-open font-bold bg-gray-800"> Çıkış Yap </button>
        <button @click="getServices" class="text-4xl font-open font-bold bg-slate-700"> Servisleri Getir </button>
    </div>
</template>