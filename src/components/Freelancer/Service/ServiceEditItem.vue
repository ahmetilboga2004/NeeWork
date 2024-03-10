<template>
    <div id="drawer-right-example"
        class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-full md:w-2/3 lg:w-2/5  "
        tabindex="-1" aria-labelledby="drawer-right-label">
        <div class="flex flex-row justify-between items-center bg-slate-100 w-full h-fit py-4 px-8">
            <h3 class="text-lg font-semibold font-open">
                <i class="fa-solid fa-pen-to-square mr-2"></i>
                Düzenle
            </h3>
            <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
                class="rounded-lg p-2 px-4 text-lg hover:bg-slate-300">
                <i class="fa-solid fa-xmark"></i>
                <span class="sr-only">Close menu</span>
            </button>
        </div>
        <div class="mt-4 p-6">
            <form action="#">
                <div class="grid grid-cols-2 gap-6 mb-4">
                    <div class="max-w-full col-span-2">
                        <label for="baslik" class="block mb-2 text-sm font-medium text-gray-900 ">Başlık</label>
                        <input type="text" name="baslik" id="baslik"
                            value="Ben Django size ile E-Ticaret sitesi geliştirebilirim"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      ">
                    </div>

                    <div class="max-w-full col-span-2">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 ">Kısa
                            Açıklama
                            <span class=" text-xs font-light">(En az: 50 - En fazla: 250 karakter)</span></label>
                        <input type="text" minlength="50" maxlength="200" name="kisa-aciklama" id="kisa-aciklama"
                            value="Ben Django ile istediğiniz fullStack E-Ticaret Sitesi geliştirebilir. FullStack, Backend ve Front End "
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      ">
                    </div>

                    <div class="max-w-full col-span-2 md:col-span-1">
                        <label for="ucret" class="block mb-2 text-sm font-medium text-gray-900 ">Ücret</label>
                        <input type="number" value="1800" name="ucret" id="ucret"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      ">
                    </div>
                    <div class="max-w-full col-span-2 md:col-span-1">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">Kategori</label>
                        <select id="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5      ">
                            <option selected>Kategori Seçin</option>
                            <option value="web-yazilim">Web Yazılım</option>
                            <option value="bot-yazilim">Bot Yazılımı</option>
                            <option value="e-ticaret">E-Ticaret</option>
                            <option value="masaüstü-uygulamalar">Masaüstü Uygulamalar</option>
                            <option value="domain-hosting-hizmetleri">Domain & Hosting Hizmetleri</option>
                            <option value="son-kullanici-testleri">Son Kullanıcı Testleri</option>
                            <option value="teknoloji-destek">Teknoloji Destek</option>
                            <option value="wordpress">Wordpress</option>
                            <option value="web-sitesi-olusturucular-cms">Web Sitesi Oluşturucular & CMS
                            </option>
                            <option value="oyun-gelistirme">Oyun Geliştirme</option>
                            <option value="server-websitesi-kurulumu">Server & Websitesi Kurulumu</option>
                            <option value="data-analizi-raporlama">Data Analizi & Raporlama</option>
                            <option value="soru-cevap-dersler">Soru Cevap & Dersler</option>
                            <option value="diger-yazilim-teknoloji">Diğer Yazılım & Teknoloji</option>
                        </select>
                    </div>
                    <div class="max-w-full col-span-2">
                        <div id="accordion-flush-duzenle" data-accordion="collapse"
                            data-active-classes="bg-white text-black" data-inactive-classes="text-gray-900">
                            <h2 id="accordion-flush-edit-heading-1">
                                <button type="button"
                                    class="flex items-center justify-between w-full py-2 text-sm font-medium rtl:text-right text-gray-900 border-b border-gray-200  gap-3"
                                    data-accordion-target="#accordion-flush-edit-body-1" aria-expanded="true"
                                    aria-controls="accordion-flush-edit-body-1">
                                    <span>Tahmini Teslim Süresi</span>
                                    <svg data-accordion-icon="data-accordion-icon" class="w-3 h-3 rotate-180 shrink-0"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewbox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-edit-body-1" class="hidden"
                                aria-labelledby="accordion-flush-edit-heading-1">
                                <div class="py-5 border-b border-gray-200 ">
                                    <div class="mb-4">
                                        <fieldset>

                                            <div class="flex items-center mb-4">
                                                <input id="country-option-2" type="radio" name="countries" value="Germany"
                                                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
                                                <label for="country-option-2"
                                                    class="block ms-2 text-sm font-medium text-gray-900 ">
                                                    3 gün içinde
                                                </label>
                                            </div>

                                            <div class="flex items-center mb-4">
                                                <input id="country-option-3" type="radio" name="countries" value="Spain"
                                                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300   " />
                                                <label for="country-option-3"
                                                    class="block ms-2 text-sm font-medium text-gray-900 ">
                                                    7 gün içinde
                                                </label>
                                            </div>
                                            <div class="flex items-center mb-4">
                                                <input id="country-option-3" type="radio" name="countries" value="Spain"
                                                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300   " />
                                                <label for="country-option-3"
                                                    class="block ms-2 text-sm font-medium text-gray-900 ">
                                                    15 gün içinde
                                                </label>
                                            </div>

                                            <div class="flex items-center mb-4">
                                                <input id="country-option-3" type="radio" name="countries" value="Spain"
                                                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300   " />
                                                <label for="country-option-3"
                                                    class="block ms-2 text-sm font-medium text-gray-900 ">
                                                    1 ay içinde
                                                </label>
                                            </div>
                                            <div class="flex items-center mb-4">
                                                <input id="country-option-3" type="radio" name="countries" value="Spain"
                                                    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300   " />
                                                <label for="country-option-3"
                                                    class="block ms-2 text-sm font-medium text-gray-900 ">
                                                    2 ay içinde
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-full col-span-2">

                        <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Resim
                            Ekle</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none   "
                            aria-describedby="file_input_help" id="file_input" type="file">
                        <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG yada JPG
                            (MAX. 800x400px).</p>

                    </div>
                    <div class="max-w-full col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Detaylı Açıklama
                            <span class=" text-xs font-light">(Verdiğiniz hizmet hakkında detaylı bir açıklama
                                yazın.)</span></label>
                        <textarea id="description" rows="5"
                            class="block min-h-32 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500      ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium quo voluptatem rerum maiores veritatis enim ratione, libero iste commodi adipisci nesciunt harum esse sed suscipit accusantium cupiditate est velit?</textarea>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button type="submit"
                        class="text-blue-700 hover:bg-blue-700 border border-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        Güncelle
                    </button>
                    <button type="button" data-drawer-toggle="drawer-right-example"
                        class="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        İptal
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>