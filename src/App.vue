<script setup>
import NavBar from './components/NavBarItem.vue';
import SideBar from './components/SideBarItem.vue';
import FlashMessage from './components/FlashMessage.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
 
<template>
    <NavBar />
    <SideBar />
    <main>
        <div class="p-2 md:p-4 sm:ml-64 ">
            <div class="p-2 md:p-4 mt-14">
                <FlashMessage />
                <RouterView />
            </div>
        </div>
    </main>
</template> 