<script setup>
import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel,
} from 'flowbite-vue'

import { useRouter } from 'vue-router';
const router = useRouter()
const logout = async () => {
    try {
        const response = await fetch("http://localhost:3000/auth/logout", {
            credentials: "include"
        })
        const data = await response.json()
        if (response.ok) {
            console.log("Çıkış işlemi başarılı bir şekilde gerçekleşti", data)
            router.push("/login")
        } else {
            console.warn("Çıkış işlemi başarısız oldu: ", data)
        }
    } catch (error) {
        console.error(error)
    }
}
</script>
<template>
    <h1>Customer Settings Page</h1>
    <button @click="logout" class=" text-4xl font-open font-bold bg-gray-800"> Çıkış Yap </button>

    <h2>Bu sayfa müşterinin ayarlar sayfasıdır</h2>
    <fwb-accordion>
        <fwb-accordion-panel>
            <fwb-accordion-header>header</fwb-accordion-header>
            <fwb-accordion-content>
                <div>
                    <p class="mb-2 text-gray-500 ">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p class="text-gray-500 ">
                        Check out this guide to learn how to <a href="/docs/getting-started/introduction/"
                            class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                        websites even faster with components on top of Tailwind CSS.
                    </p>
                </div>
            </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
            <fwb-accordion-header>another header</fwb-accordion-header>
            <fwb-accordion-content>
                <div>
                    <p class="mb-2 text-gray-500 ">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the
                        library has a design equivalent in our Figma file.
                    </p>
                    <p class="text-gray-500 ">
                        Check out the <a href="https://flowbite.com/figma/"
                            class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the
                        utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                </div>
            </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
            <fwb-accordion-header>and one more header</fwb-accordion-header>
            <fwb-accordion-content>
                <div>
                    <p class="mb-2 text-gray-500 ">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the
                        library has a design equivalent in our Figma file.
                    </p>
                    <p class="text-gray-500 ">
                        Check out the <a href="https://flowbite.com/figma/" class="text-blue-600  hover:underline">Figma
                            design system</a> based on the
                        utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                </div>
            </fwb-accordion-content>
        </fwb-accordion-panel>
    </fwb-accordion>
</template>