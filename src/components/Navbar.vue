<script setup>
import { Icon } from '@iconify/vue';
import NavD from './NavD.vue'

const navC = [
    {
        label: "Dashboard",
        icon: false
    },
    {
        label: "Campaigns",
        icon: true
    },
    {
        label: "Audience",
        icon: true
    },
    {
        label: "Automations",
        icon: true
    }
]

</script>

<template>
    <nav class="w-[100%] h-[50px] bg-[#293880] px-[50px] flex flex-row items-center gap-[20px]  justify-between">
        <div class="flex flex-row gap-[30px]">
            <Icon icon="ic:baseline-send" class="text-[30px] text-white" />
            <div class="flex flex-row gap-[20px]">
                <NavD v-for="(item, i) in navC" :label="item.label" :icon="item.icon" :key="i" />
            </div>
        </div>
        <div class="h-full flex flex-row gap-[20px] items-center">
            <div>
                <Icon icon="uil:plus" class="text-white text-[20px] border-white border-solid" />
            </div>
            <div class="w-[0.1px] h-[50px] bg-white/20"></div>
            <div class="flex flex-row gap-[15px]">
                <Icon icon="tabler:search" class="text-white text-[15px]" />
                <Icon icon="tdesign:notification" class="text-white text-[15px]" />
                <Icon icon="ion:apps-sharp" class="text-white text-[15px]" />
            </div>
            <div class="w-[0.1px] h-[50px] bg-white/20"></div>
            <div>
                <div >
                    <img class="w-[20px] h-[20px] rounded-full" src="https://images.unsplash.com/photo-1696484958150-ae2a11fd0449?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                </div>
            </div>
        </div>
    </nav>
</template>