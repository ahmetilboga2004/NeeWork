<script setup>
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
        <button @click="getServices" class="text-4xl font-open font-bold bg-slate-700"> Servisleri Getir </button>
    </div>
</template>