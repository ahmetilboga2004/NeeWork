<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import useValidate from '@vuelidate/core'
import { required, minLength, maxLength, alpha, alphaNum, email, sameAs } from '@vuelidate/validators'
import RegisterEnd from '@/components/RegisterEnd.vue';
import { register } from '@/services/auth';
import getCategories from "@/services/getCategories"

const currentStep = ref(1)
const registerSuccess = ref(false)
const categories = ref([])
const formDatas = reactive({
    name: "",
    surname: "",
    username: "",
    meslek: "",
    category: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
})
const ifFreelancer = () => formDatas.role.value === "freelancer"

onMounted(async () => {
    const response = await getCategories()
    if (response.success) {
        const data = response.data.data
        categories.value = data
    }
})

const formDatasRules = computed(() => {
    return {
        name: { required, alpha, minLength: minLength(2), mmaxLength: maxLength(30) },
        surname: { required, alpha, minLength: minLength(2), maxLength: maxLength(30) },
        username: { required, alphaNum, minLength: minLength(4), maxLength: maxLength(15) },
        meslek: { required: ifFreelancer(), alpha, minLength: minLength(4), maxLength: maxLength(50) },
        category: { required: ifFreelancer() },
        email: { required, email },
        password: { required, minLength: minLength(8), maxLength: maxLength(20) },
        confirmPassword: { required, sameAs: sameAs(formDatas.password) },
        role: { required, alpha }
    }

})

const v$ = useValidate(formDatasRules, formDatas)

const submitForm = async () => {
    // Validate the form fields
    const validationResult = await v$.value.$validate()
    if (!validationResult) {
        console.log("Kayıt işlemi başarısız oldu")
        return
    } else {
        const result = await register(formDatas)
        if (result.success) {
            console.log("Kayıt işlemi başarılı: ", result.data)
            registerSuccess.value = true
        } else {
            console.error("Kayıt işlemi başarısız oldu: ", result.data)
        }
        currentStep.value++
    }
};

</script>

<template>
    <div class=" xl:mx-auto grid justify-items-center p-4">
        <div class="w-full lg:w-2/5">
            <div class="bg-white rounded-lg p-4 flex items-center mb-4">
                <div>
                    <img src="@/assets/images/logos/Untitled-1-01.svg" class="w-20 h-20 fill-none" alt="" />
                </div>
                <div class="text-3xl md:text-5xl font-bold text-colorYellow">
                    NeeWork
                </div>
            </div>
            <div class="px-4 md:px-6 bg-white rounded-lg p-4">
                <template v-if="currentStep !== 3">
                    <div id="sign-up-header" class="text-2xl md:text-3xl font-bold font-roboto text-gray-800 mb-2 py-4">
                        Kayıt Ol
                    </div>
                </template>
                <form class="grid grid-cols-2 gap-4" id="registerForm" @submit.prevent="submitForm" novalidate>
                    <template v-if="currentStep === 1">
                        <h3 class="col-span-2 mb-5 text-lg font-medium text-gray-900">
                            <span>Müşterimisin yoksa bir Freelancer'misin ?</span>
                        </h3>
                        <ul class="grid col-span-2 w-full gap-6 mb-4">
                            <li>
                                <input type="radio" id="customer" name="userType" value="customer" class="hidden peer"
                                    v-model="formDatas.role" />
                                <label for="customer"
                                    class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">
                                            Müşteri
                                        </div>
                                    </div>

                                    <i class="fa-solid fa-user w-5 h-5 ms-3"></i>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="freelancer" name="userType" value="freelancer" class="hidden peer"
                                    v-model="formDatas.role" />
                                <label for="freelancer"
                                    class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">
                                            Freelancer
                                        </div>
                                    </div>

                                    <i class="fa-solid fa-laptop w-5 h-5 ms-3"></i>
                                </label>
                            </li>
                        </ul>

                        <div class="col-span-2 flex justify-end">
                            <div>
                                <button type="button" :disabled="formDatas.role === ''" @click="currentStep++"
                                    class="text-black bg-colorYellow hover:bg-gold focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Devam Et<i class="fa-solid fa-arrow-right ml-1"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-span-2">
                            <p class="text-sm font-light text-gray-500">
                                Zaten bir hesabın var mı?
                                <RouterLink :to="{ name: 'login' }" class="font-medium hover:underline">Giriş Yap
                                </RouterLink>
                            </p>
                        </div>
                    </template>
                    <template v-if="currentStep === 2">
                        <div class="col-span-2">
                            <label for="ad" class="block mb-2 text-sm font-medium text-gray-900">Ad</label>
                            <input type="text" name="ad" id="ad" placeholder="Ahmet" v-model="formDatas.name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                required />
                            <template v-for="error in v$.name.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'alpha'">sadece alfabetik
                                    karakter giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'minLength'">En az 2 karakter
                                    giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'maxLength'">En fazla 30
                                    karakter giriniz!</small>
                            </template>
                        </div>
                        <div class="col-span-2">
                            <label for="soyad" class="block mb-2 text-sm font-medium text-gray-900">Soyad</label>
                            <input type="text" name="soyad" id="soyad" placeholder="İlboga" v-model="formDatas.surname"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                required />
                            <template v-for="error in v$.surname.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'alpha'">sadece alfabetik
                                    karakter giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'minLength'">En az 2 karakter
                                    giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'maxLength'">En fazla 30
                                    karakter giriniz!</small>
                            </template>
                        </div>
                        <div v-if="formDatas.role === 'freelancer'" class="col-span-2">
                            <label for="meslek" class="block mb-2 text-sm font-medium text-gray-900">Meslek</label>
                            <input type="text" name="meslek" id="meslek" placeholder="Yazılım Geliştirici"
                                v-model="formDatas.meslek"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                required />
                            <template v-for="error in v$.meslek.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'alpha'">sadece alfabetik
                                    karakter giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'minLength'">En az 2 karakter
                                    giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'maxLength'">En fazla 30
                                    karakter giriniz!</small>
                            </template>
                        </div>
                        <div v-if="formDatas.role === 'freelancer'" class="col-span-2">
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Hizmet
                                Kategorisi</label>
                            <select name="category" id="category" v-model="formDatas.category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected="selected">Hizmet Kategorisini seçin</option>
                                <option v-for="category in categories" :key="category.id" :value="category.name">{{
                                    category.name
                                }}</option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Posta</label>
                            <input type="email" name="email" id="email" v-model="formDatas.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="example@gmail.com" required />
                            <template v-for="error in v$.email.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'email'">Email adresinizi kontrol
                                    ediniz!</small>
                            </template>
                        </div>
                        <div class="col-span-2">
                            <label for="kullanici-adi" class="block mb-2 text-sm font-medium text-gray-900">Kullanıcı
                                Adı</label>
                            <input type="text" name="kullanici-adi" id="kullanici-adi" v-model="formDatas.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="ahmetilboga47" required autocomplete="username" />
                            <template v-for="error in v$.username.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'alphaNum'">sadece alfa numerik
                                    karakter giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'minLength'">En az 4 karakter
                                    giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'maxLength'">En fazla 15
                                    karakter giriniz!</small>
                            </template>


                        </div>
                        <div class="col-span-2">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Şifre</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                v-model="formDatas.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                required autocomplete="off" />
                            <template v-for="error in v$.password.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'minLength'">En az 8 karakter
                                    giriniz!</small>
                                <small class=" text-red-600" v-if="error.$validator == 'maxLength'">En fazla 20
                                    karakter giriniz!</small>
                            </template>


                        </div>
                        <div class="col-span-2">
                            <label for="passwor2" class="block mb-2 text-sm font-medium text-gray-900">Şifre Tekrar</label>
                            <input type="password" name="password2" id="password2" placeholder="••••••••"
                                v-model="formDatas.confirmPassword"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                required autocomplete="off" />
                            <template v-for="error in v$.confirmPassword.$errors" :key="error.$uid">
                                <small class=" text-red-600" v-if="error.$validator == 'required'">Bu alan
                                    zorunlu</small>
                                <small class=" text-red-600" v-if="error.$validator == 'sameAs'">Lütfen parolanızın
                                    eşleştiğinden emin olunuz!</small>
                            </template>


                        </div>
                        <div class="col-span-2 flex justify-between">

                            <div>
                                <button type="submit" @click="currentStep--"
                                    class="text-black bg-colorYellow hover:bg-gold focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <i class="fa-solid fa-arrow-left mr-1"></i>
                                    Geri Dön
                                </button>
                            </div>
                            <div>
                                <button type="submit"
                                    class="text-black bg-colorYellow hover:bg-gold focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Kayıt Ol
                                    <i class="fa-solid fa-arrow-right ml-1"></i>
                                </button>
                            </div>
                        </div>

                        <div class="col-span-2">
                            <p class="text-sm font-light text-gray-500">
                                Zaten bir hesabın var mı?
                                <RouterLink :to="{ name: 'login' }" class="font-medium hover:underline">Giriş Yap
                                </RouterLink>
                            </p>
                        </div>
                    </template>
                </form>
                <template v-if="currentStep === 3">
                    <RegisterEnd :message="registerSuccess ? 'Tebrikler' : 'Üzgünüz'"
                        :message-detail="registerSuccess ? 'Kullanıcı kaydınız başarıyla oluşturulmuştur' : 'Kullanıcı kaydınız oluşturulamadı :('"
                        :svg-icon="registerSuccess ? 'bg-successfully' : 'failed'" />
                </template>
            </div>
        </div>
    </div>
</template>