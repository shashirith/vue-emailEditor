<script setup>
import { Icon } from "@iconify/vue";
import {  inject } from "vue";
import { useRouter } from "vue-router";

const formData = inject("formData");
const router = useRouter();
const handleBack = () => {
    router.go(-1);
};
const handleNext = async () => {
    formData.targeting = null;
    router.push("/behaviour");
};
</script>
<template>
    <div class="bg-[#f3f4f6] height w-full flex flex-col items-center justify-between">
        <div class="w-[40%] flex flex-col gap-[20px] py-[50px]">
            <div class="flex flex-row items-center justify-end gap-[20px]">
                <h1 @click="handleBack" class="underline underline-offset-[3px] cursor-pointer">
                    Go back
                </h1>
                <button @click="handleNext"
                    class="border-solid border-[2px] border-black/20 p-[5px] rounded-[6px] font-[inter] text-[15px]">
                    Continue
                </button>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.height {
    min-height: calc(100vh - 100px);
}
</style>
