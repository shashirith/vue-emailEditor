<script setup>
import { Icon } from '@iconify/vue';
import Card from "./Card.vue";
const data=[
    {
        name:"Intro Bar",
        src: "../src/assets/designs/1.png"
    },
    {
        name:"Model Background Classic",
        src: "../src/assets/designs/2.png"
    },
    {
        name:"Mern Left Image Modern",
        src: "../src/assets/designs/3.png"
    },
    {
        name:"Page Takeover Modern Retro",
        src: "../src/assets/designs/4.png"
    },
    {
        name:"Modal",
        src: "../src/assets/designs/5.png"
    },
    {
        name:"Letter",
        src: "../src/assets/designs/6.png"
    },
    {
        name:"Modal Background Modern",
        src: "../src/assets/designs/7.png"
    },
    {
        name:"Slider Modern",
        src: "../src/assets/designs/8.png"
    },
]
</script>

<template>
    <div class="w-[100vw] px-[50px] py-[30px] flex gap-[30px] flex-col ">
        <div class="flex flex-row justify-end">
            <div
                class="w-fit flex flex-row items-center gap-[5px] border-solid border-[2px] p-[5px] rounded-[5px] border-black/20">
                <Icon class="text-black/50" icon="tabler:search" />
                <input class="outline-none font-[inter] text-sm" placeholder="Search Templates">
            </div>
        </div>
        <div class="flex flex-row flex-wrap md:gap-[50px] justify-center md:justify-between">
            <Card v-for="(item,i) in data" :key="i" :name="item.name" :src="item.src"/>
        </div>
    </div>
</template>