<template>
    <form class="flex items-center">
        <label for="simple-search" class="sr-only">Ara</label>
        <div class="relative w-fit">
            <input type="text" id="simple-search"
                class="border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="İlan ara..." required />
        </div>
        <button type="submit"
            class="p-2 px-2 ms-2 text-sm font-medium text-black border-black bg-navbar rounded-lg border border-yellow hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-200">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span class="sr-only">Search</span>
        </button>
    </form>
</template>