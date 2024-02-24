<script setup>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import FlashMessage from './components/FlashMessage.vue';

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