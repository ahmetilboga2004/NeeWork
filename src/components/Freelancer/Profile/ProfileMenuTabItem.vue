<template>
    <div id="menu" class="p-4 bg-white sticky top-[90px] rounded-lg mb-4 shadow-xl">
        <ul
            class="flex flex-wrap justify-center text-sm lg:text-base md:font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
        >
            <li class="me-2" role="presentation">
                <button
                    data-tabs-target="#hizmetler"
                    type="button"
                    role="tab"
                    aria-controls="hizmetler"
                    aria-selected="false"
                    class="action-btn group hover:text-gold md:px-2 grid-rows-2 items-center"
                >
                    <i class="fa-solid fa-handshake grid"></i>
                    <span> Hizmetler </span>
                </button>
            </li>
            <li class="me-2" role="presentation">
                <button
                    data-tabs-target="#calismalar"
                    type="button"
                    role="tab"
                    aria-controls="calismalar"
                    aria-selected="false"
                    class="action-btn group hover:text-gold md:px-2 grid-rows-2 items-center"
                >
                    <i class="fa-solid fa-briefcase grid"></i>
                    <span> Çalışmalar </span>
                </button>
            </li>
            <li class="me-2" role="presentation">
                <button
                    data-tabs-target="#yorumlar"
                    type="button"
                    role="tab"
                    aria-controls="yorumlar"
                    aria-selected="false"
                    class="action-btn group hover:text-gold md:px-2 grid-rows-2 items-center"
                >
                    <i class="fa-solid fa-folder-open grid"></i>
                    <span> Yorumlar </span>
                </button>
            </li>
            <li class="me-2" role="presentation">
                <button
                    data-tabs-target="#portfoy"
                    type="button"
                    role="tab"
                    aria-controls="portfoy"
                    aria-selected="false"
                    class="action-btn group hover:text-gold md:px-2 grid-rows-2 items-center"
                >
                    <i class="fa-solid fa-folder-open grid"></i>
                    <span> Portföy </span>
                </button>
            </li>
        </ul>
    </div>
</template>
