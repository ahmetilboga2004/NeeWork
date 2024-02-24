<template>
    <div id="drawer-right-ilan-detay"
        class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-full md:w-2/3 lg:w-2/5 "
        tabindex="-1" aria-labelledby="drawer-right-label">
        <div class="flex flex-row justify-between items-center bg-slate-100 w-full h-fit py-4 px-8">
            <h3 class="text-lg font-semibold font-open">
                <i class="fa-solid fa-briefcase"></i>
                İlan Detayı
            </h3>
            <button type="button" data-drawer-hide="drawer-right-ilan-detay" aria-controls="drawer-right-ilan-detay"
                class="rounded-lg p-2 px-4 text-lg hover:bg-slate-300">
                <i class="fa-solid fa-xmark"></i>
                <span class="sr-only">Close menu</span>
            </button>
        </div>
        <div class="p-8">
            <div>
                <div class="mb-6">
                    <div class="h-60 overflow-hidden">
                        <img class="rounded-lg object-cover w-full h-full" src="/images/web-development.png"
                            alt="product image" />
                    </div>
                </div>
                <div>
                    <h2 class=" text-2xl font-bold font-kanit">
                        Şirketimiz için web sitesi istiyorum
                    </h2>
                    <hr class="h-px my-6 bg-gray-200 border-0">
                    <div>
                        <h4 class="text-xl font-bold mb-2">İlan Detayı</h4>
                        <p class="font-medium text-gray-600 font-open mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis velit amet vel quis dolores
                            voluptas non, tenetur ea, ducimus ipsum quidem, fuga molestias nostrum officia corrupti at
                            repellendus! Temporibus suscipit tempora unde! Alias veritatis rerum error asperiores animi
                            eaque unde id corrupti quas, repellendus possimus laboriosam ab nisi voluptatem quo. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Autem debitis voluptas quisquam ratione cumque
                            cupiditate nesciunt amet ea fuga! Aperiam, similique debitis, mollitia, accusamus quam odio quia
                            neque suscipit eaque eius ut quasi dolore quae ipsam? Ipsam illum qui quaerat. Odit nam ut
                            officia inventore veniam vero eum delectus accusamus.
                        </p>
                    </div>
                </div>
                <hr class="h-px my-6 bg-gray-200 border-0">

                <div class="flex flex-wrap gap-2">
                    <p class="text-sm font-bold bg-slate-100  p-3 rounded">
                        <i class="fa-solid fa-turkish-lira-sign text-green-500 mr-2"></i>
                        1800 - 3000
                    </p>
                    <p class="text-sm font-bold bg-slate-100  p-3 rounded ">
                        <i class="fa-regular fa-folder-open text-yellow-500 mr-2"></i>
                        Web Yazılım
                    </p>

                    <p class="text-sm font-bold bg-slate-100 p-3 rounded">
                        <i class="fa-solid fa-calendar-days mr-2 text-teal-500"></i>
                        7 gün içinde Teslim
                    </p>
                </div>
            </div>
            <hr class="h-px my-6 bg-gray-200 border-0">
        </div>

    </div>
</template>