<script setup>
import { reactive, computed, ref } from 'vue';
import useValidate from '@vuelidate/core'
import { required, alphaNum } from '@vuelidate/validators'
import { useRouter, useRoute } from 'vue-router';
import { useFlashStore } from "@/stores/flashMessage"
import { login } from "@/services/auth"
import { useAuthStore } from '@/stores/auth';


const router = useRouter()
const route = useRoute()
const flashStore = useFlashStore()
const authStore = useAuthStore()
const serverErrors = ref({})

const formDatas = reactive({
    username: "",
    password: "",
})

const formDatasRules = computed(() => {
    return {
        username: { required, alphaNum },
        password: { required },
    }

})

const v$ = useValidate(formDatasRules, formDatas)

const submitForm = async () => {
    // Validate the form fields
    const validationResult = await v$.value.$validate()
    if (!validationResult) {
        console.log("Giriş işlemi başarısız oldu")
        return
    } else {
        serverErrors.value = ""
        const result = await login(formDatas)
        if (result.success) {
            console.log("Giriş işlemi başarılı: ", result.data)
            await authStore.checkAuth()
            console.log(result.data.user)
            flashStore.setFlashMessage("Giriş Başarılı", "success")
            router.push(route.query.redirect || "/c")
        } else {
            console.error("giriş işlemi başarısız oldu: ", result.error)
            serverErrors.value = result.error
            console.log(serverErrors.value)
        }
    }
};

</script>

<template>
    <div class="mx-auto grid justify-items-center p-4">
        <div class=" w-full lg:w-2/5">
            <div class="bg-white rounded-lg p-4 w-full flex items-center mb-4">
                <div>
                    <img src="@/assets/images/logos/Untitled-1-01.svg" class="w-20 h-20 fill-none" alt="">
                </div>
                <div class="text-3xl md:text-5xl font-bold text-colorYellow">NeeWork</div>
            </div>
            <div class="bg-white rounded-lg p-4 w-full  px-4 md:px-6">
                <div class=" text-2xl md:text-3xl font-bold font-roboto text-gray-800 mb-2 py-4">
                    Giriş Yap
                </div>
                <form class="space-y-4 md:space-y-6" id="loginForm" @submit.prevent="submitForm" novalidate>

                    <div>
                        <label for="email-username" class="block mb-2 text-sm font-medium text-gray-900">E-Posta yada
                            Kullanıcı Adı</label>
                        <input type="text" name="email-username" id="email-username" v-model="formDatas.username"
                            @input="serverErrors = ''" @blur="v$.username.$touch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                            placeholder="E-Postanızı yada Kullanıcı adınızı girin" required>
                        <div v-for="error in v$.username.$errors" :key="error.$uid">
                            <small class=" text-red-600" v-if="error.$validator === 'required'">Bu alan
                                zorunlu
                            </small>
                        </div>

                        <small class=" text-red-600" v-if="serverErrors.username">{{ serverErrors.username }}</small>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Şifre</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" autocomplete="off"
                            v-model="formDatas.password" @input="serverErrors = ''"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                            required>
                        <div v-for="error in v$.password.$errors" :key="error.$uid">
                            <small class=" text-red-600" v-if="error.$validator === 'required'">Bu
                                alan
                                zorunlu!
                            </small>
                        </div>
                        <small class=" text-red-600" v-if="serverErrors.password || v$.$invalid === true">{{
                            serverErrors.password }}</small>

                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2" required>
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 ">Beni hatırla</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium  hover:underline ">Şifremi Unuttum</a>
                    </div>
                    <div>
                        <button type="submit" :disabled="v$.$invalid === true"
                            :class="v$.$invalid === true ? 'bg-gray-50' : 'bg-colorYellow hover:bg-gold'"
                            class=" text-black focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Giriş
                            Yap</button>
                    </div>
                    <p class="text-sm font-light text-gray-500 ">
                        Bir Hesabın yok mu?
                        <RouterLink :to="{ name: 'register' }" class="font-medium hover:underline ">Kayıt Ol</RouterLink>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>