<script setup>
import { ref , inject, onUnmounted, watch} from 'vue';
import { RouterLink } from 'vue-router'
import FileType from '../components/FileType.vue';


const selected = ref("");

const formData = inject('formData');

const handleChange = (e) => {
    formData.type = e.target.value;
}

watch(formData, (n, p) => {
    console.log(n, p)
})

const data=[
    {
        name:"Embedded Form",
        description:"Create a form to embed on your website",
        src: "../src/assets/embedded.png",
        id:"1"
    },
    {
        name:"Landing Page",
        description:"Create a landing page with a form",
        src: "../src/assets/landing.png",
        id:"2"
    },
    {
        name:"Popup Form",
        description:"Add a form that pops up as a box",
        src: "../src/assets/pop_up.png",
        id:"3"
    }
]

</script>

<template>
    <div class="flex flex-col w-fit p-[50px] gap-[30px]">
        <div>
            <h1 class="font-[inter] text-[20px] font-semibold ">Select Form Type</h1>
            <h1 class="font-[inter] text-[15px] font-normal text-[#b2b3bb]">What type of form would you like to create</h1>
        </div>
        <div class="flex flex-col md:flex-row  gap-[20px] justify-center items-center">
            <FileType @change="handleChange" v-for="(item,i) in data"  :selected="selected" v-bind="item"/>
        </div>
        <div class="h-[1px] bg-black/20"></div>
        <div class="flex justify-end">
            <RouterLink to="/design">
                <button
                    class="border-solid border-[2px] border-black/20 p-[5px] rounded-[6px] font-[inter] text-[15px]">Continue</button>
            </RouterLink>
        </div>
    </div>
</template>