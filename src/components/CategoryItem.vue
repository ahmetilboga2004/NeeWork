<template>
    <div class="flex-1">
        <div id="kategori" class="rounded-lg lg:w-[30vh] sticky top-[100px] lg:h-[70vh] bg-white">
            <div class="text-center w-full p-4 rounded-t-lg bg-navbar mb-4 font-bold text-gray-800 text-2xl">
                Kategori
            </div>

            <div class="grid gap-4 p-3">

                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white  text-gray-900 "
                    data-inactive-classes="text-gray-500">
                    <h2 id="accordion-flush-heading-1">
                        <button type="button"
                            class="flex items-center justify-between w-full py-3 font-medium text-gray-500 border-b border-gray-200   gap-3"
                            data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                            aria-controls="accordion-flush-body-1">
                            <span>
                                <i class="fa-solid fa-circle-check"></i>
                                İlan Durumu</span>
                            <svg data-accordion-icon="data-accordion-icon" class="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                        <div class="py-5 border-b border-gray-200 ">
                            <fieldset>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="countries" value="USA"
                                        class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                        checked="checked" />
                                    <label for="country-option-1" class="block ms-2 text-sm font-medium text-gray-900 ">
                                        <i class="fa-solid fa-earth-europe"></i>
                                        Açık
                                    </label>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="countries" value="Germany"
                                        class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 ">
                                        <i class="fa-solid fa-check-double"></i>
                                        Tamamlandı
                                    </label>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="countries" value="Spain"
                                        class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 ">
                                        <i class="fa-solid fa-ban"></i>
                                        İptal Edildi
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <h2 id="accordion-flush-heading-2">
                        <button type="button"
                            class="flex items-center justify-between w-full py-3 font-medium text-gray-500 border-b border-gray-200 "
                            data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                            aria-controls="accordion-flush-body-2">
                            <span>
                                <i class="fa-solid fa-calendar-days"></i>
                                Yayınlanma Tarihi</span>
                            <svg data-accordion-icon="data-accordion-icon" class="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div class="py-5 border-b border-gray-200 ">
                            <div class="mb-4">
                                <fieldset>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-1" type="radio" name="countries" value="USA"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                                            checked="checked" />
                                        <label for="country-option-1" class="block ms-2 text-sm font-medium text-gray-900">
                                            Bugün
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-2" type="radio" name="countries" value="Germany"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            3 gün önce
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-3" type="radio" name="countries" value="Spain"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            7 gün önce
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-3" type="radio" name="countries" value="Spain"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900">
                                            1 ay önce
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            <div class="relative max-w-sm">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewbox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input datepicker="datepicker" datepicker-autohide="datepicker-autohide" type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                                    placeholder="Yayınlanma Tarihi">
                            </div>

                        </div>
                    </div>
                    <h2 id="accordion-flush-heading-3">
                        <button type="button"
                            class="flex items-center justify-between w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 "
                            data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                            aria-controls="accordion-flush-body-3">
                            <span>
                                <i class="fa-solid fa-flag-checkered"></i>
                                Son Teslim Tarihi</span>
                            <svg data-accordion-icon="data-accordion-icon" class="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                        <div class="py-5 border-b border-gray-200 ">
                            <div class="mb-4">
                                <fieldset>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-1" type="radio" name="countries" value="USA"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                                            checked="checked" />
                                        <label for="country-option-1" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            Bugün
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-2" type="radio" name="countries" value="Germany"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            3 gün içinde
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-3" type="radio" name="countries" value="Spain"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            7 gün içinde
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-3" type="radio" name="countries" value="Spain"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            15 gün içinde
                                        </label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input id="country-option-3" type="radio" name="countries" value="Spain"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            1 ay içinde
                                        </label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-3" type="radio" name="countries" value="Spain"
                                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " />
                                        <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 ">
                                            2 ay içinde
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            <div class="relative max-w-sm">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 " aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewbox="0 0 20 20">
                                        <path
                                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input datepicker="datepicker" datepicker-autohide="datepicker-autohide" type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                                    placeholder="Son Teslim Tarihi">
                            </div>
                        </div>
                    </div>
                    <h2 id="accordion-flush-heading-4">
                        <button type="button"
                            class="flex items-center justify-between w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200   gap-3"
                            data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
                            aria-controls="accordion-flush-body-4">
                            <span>
                                <i class="fa-solid fa-sack-dollar"></i>
                                Bütçe</span>
                            <svg data-accordion-icon="data-accordion-icon" class="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                        <div class="py-5 border-b border-gray-200 ">
                            <div class="grid grid-cols-2 gap-4">
                                <input type="number" id="min" min="50" max="5000"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="En az" />

                                <input type="number" id="max" min="50" max="5000"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="En fazla" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="py-2 px-4 bg-colorYellow hover:bg-gold rounded-lg border border-black text-black">Filtrele</button>
            </div>
        </div>
    </div>
</template>