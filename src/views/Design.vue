<script setup>
import { Icon } from '@iconify/vue';
import Card from '../components/Card.vue';
import { computed, reactive, ref, inject} from 'vue';

const data=[
    {
        name:"SendX Template",
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
let searchQuery = ref("");
const filteredData = computed(() => {
  return  data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
});



</script>

<template>
    <div class="heights bg-[#f3f4f6] w-full  flex justify-center">
    <div class="w-[100vw] px-[50px] py-[30px] flex gap-[30px] flex-col ">
        <div class="flex flex-row justify-end">
            <div
                class="w-fit flex flex-row items-center gap-[5px] border-solid border-[2px] p-[5px] rounded-[5px] border-black/20">
                <Icon class="text-black/50 font-bold" icon="tabler:search" />
                <input  class="outline-none  font-[inter] bg-white/0 text-sm" placeholder="Search Templates">
            </div>
        </div>
        <div class="flex flex-row flex-wrap md:gap-[50px] justify-center md:justify-between">
            <Card v-for="(item,i) in data" :key="i" v-bind="item" />
        </div>
    </div>
</div>
</template>

<style>
.heights{
 height: calc(100vh-100px);
}
</style>