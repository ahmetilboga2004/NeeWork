<template>
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">

        <div class="card grid h-max p-6 bg-white rounded-lg">
            <div class="mb-2">
                <div class="flex items-center mb-3">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded-full" src="/images/profile.jpg" alt="Profile Photo" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium truncate">Ahmet İlboga</p>
                        <p class="text-sm font-mono truncate">21/12/2023</p>
                    </div>
                    <div class="action-icons text-2xl font-semibold">
                        <button type="button" class="text-green-700">
                            <i class="fa-regular fa-bookmark grid hover:bg-text-green-700 "></i>
                        </button>
                    </div>
                </div>
                <div class="mb-3">
                    <h5 class="text-lg font-bold tracking-tight text-gray-900">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p class="text-sm font-normal text-gray-700">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                        order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                        chronological order. reverse chronological order. reverse order
                    </p>

                </div>

            </div>
            <div class="flex justify-between items-center self-end">
                <div class="text-lg bg-green-50 rounded-lg p-2 w-fit font-bold">
                    <p class="px-2">
                        <i class="fa-solid fa-turkish-lira-sign text-green-500 mr-2"></i>200 - 1500
                    </p>
                </div>
                <div>
                    <button
                        class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                        data-drawer-target="drawer-right-ilan-detay" data-drawer-show="drawer-right-ilan-detay"
                        data-drawer-placement="right" aria-controls="drawer-right-ilan-detay">Detay</button>
                </div>
            </div>

        </div>

    </div>
</template>