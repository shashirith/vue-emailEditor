<script setup>
import { Icon } from '@iconify/vue';
import { ref, watch, inject, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

const afterInput = ref("50");
const onSecond = ref("");
const showAdvance = ref(false);
const afterDays = ref("");

const first = ref("");
const second = ref("");
const third = ref("");

const router = useRouter();

const formData = inject('formData');

function isNumeric(num){
  return !isNaN(num)
}

watch(afterInput, (newValue, prevValue) => {
    if(isNumeric(newValue) === false){
        afterInput.value = prevValue;
    }
    if (newValue > 100) {
        afterInput.value = prevValue;
    }
    else if (newValue < 1) {
        afterInput.value = 1;
    }
    console.log(newValue, prevValue)
})

watch(onSecond, (newValue, prevValue) => {
    if(isNumeric(newValue) === false){
        onSecond.value = prevValue;
    }
    if(newValue > 100){
        onSecond.value = prevValue;
    }
    if (newValue < 1) {
        onSecond.value = 1;
    }
    console.log(newValue, prevValue)
})

const handleAdvance = () => {
    showAdvance.value = !showAdvance.value;
}

const handleBack = () => {
    router.go(-1);
}



</script>
<template>
    <div class="w-[40%] flex flex-col gap-[20px] py-[50px]">
        <div>
            <div>
                <h1 class="font-[inter] font-medium">Show the popup when visitor:</h1>
            </div>
            <div class="mt-[20px] flex flex-col gap-[10px]">
                <div class="flex flex-row items-center">
                    <input @change="(e) => formData.targeting[1] = e.target.value" name="t1" value="1" id="1" type="radio">
                    <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="1">Enters Website</label>
                </div>
                <div>
                    <input @change="(e) => formData.targeting[1] = e.target.value" name="t1" value="2" id="2" type="radio">
                    <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="2">Exits Website</label>
                </div>
                <div class="flex flex-row items-center">
                    <input @change="(e) => formData.targeting[1] = e.target.value" name="t1" value="3" id="3" type="radio">
                    <label class="font-[inter] ml-[10px] text-[15px] leading-[15px] flex flex-row items-center" for="3">
                        <p class="text-[15px] leading-[15px]">on</p>
                        <div
                            class="mx-[10px] rounded-md drop-shadow-md p-[5px] pr-[15px] bg-white flex flex-row items-center justify-center">
                            <span class="pr-[10px]">
                                <input :value="afterInput" @input="afterInput = $event.target.value"
                                    class="text-[15px] w-[25px] outline-none bg-white/0" type="text">
                                %
                            </span>
                            <div>
                                <Icon @click="afterInput++" class="text-[6px]" icon="mingcute:up-line" />
                                <Icon @click="afterInput--" class="text-[6px]" icon="mingcute:down-line" />
                            </div>
                        </div>
                        <h1>page scroll</h1>
                    </label>
                </div>
                <div class="flex flex-row items-center">
                    <input @change="(e) => formData.targeting[1] = e.target.value" name="t1" value="4" id="4" type="radio">
                    <label class="font-[inter] ml-[10px] text-[15px] leading-[15px] flex flex-row items-center" for="4">
                        <p class="text-[15px] leading-[15px]">After</p>
                        <div
                            class="mx-[10px] rounded-md drop-shadow-md p-[5px] bg-white flex flex-row items-center justify-center">
                            <input :value="onSecond" @input="onSecond = $event.target.value"
                                class="text-[15px] w-[30px] outline-none bg-white/0" type="text">
                            <div>
                                <Icon @click="onSecond++" class="text-[6px]" icon="mingcute:up-line" />
                                <Icon @click="onSecond--" class="text-[6px]" icon="mingcute:down-line" />
                            </div>
                        </div>
                        <h1>seconds on website</h1>
                    </label>
                </div>


            </div>
        </div>
        <div class="h-[2px] bg-[#efefef]">
        </div>
        <div @click="handleAdvance" class="flex flex-row items-center gap-[5px]">
            <h1 class=" text-[15px] text-blue-600">Advanced</h1>
            <Icon class="text-blue-600" icon="mingcute:down-fill" />
        </div>


        <div v-if="showAdvance" class="flex flex-col gap-[20px]">
            <div>
                <div>
                    <h1 class="font-[inter] font-medium">Show the popup when visitor:</h1>
                    <p class="text-black/40 font-[inter] mt-[10px]">Set the period when you want to show the popup to the
                        same
                        visitor if the didn't subscribe</p>
                </div>
                <div class="mt-[20px] flex flex-col gap-[10px]">
                    <div class="flex flex-row items-center">
                        <input value="5" @change="(e) => formData.targeting[2] = e.target.value" name="t2" id="5"
                            type="radio">
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="5">Every page view</label>
                    </div>
                    <div>
                        <input value="6" @change="(e) => formData.targeting[2] = e.target.value" name="t2" id="6"
                            type="radio">
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="6">Every new browser
                            session</label>
                    </div>
                    <div class="flex flex-row items-center">
                        <input value="7" @change="(e) => formData.targeting[2] = e.target.value" name="t2" id="7"
                            type="radio">
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px] flex flex-row items-center" for="7">
                            <p class="text-[15px] leading-[15px]">After</p>
                            <div
                                class="mx-[10px] rounded-md drop-shadow-md p-[5px] bg-white flex flex-row items-center justify-center">
                                <input :value="afterDays" @input="afterDays = $event.target.value"
                                    class="text-[15px] w-[30px] outline-none bg-white/0" type="text">
                            </div>
                            <h1>Days</h1>
                        </label>
                    </div>
                </div>
            </div>
            <div class="h-[2px] bg-[#efefef]">
            </div>
            <div>
                <div>
                    <h1 class="font-[inter] font-medium">When to stop showing the popup</h1>
                </div>
                <div class="mt-[20px] flex flex-col gap-[10px]">
                    <div class="flex flex-row items-center">
                        <input value="8" @change="(e) => formData.targeting[3] = e.target.value" name="t3" id="8"
                            type="radio">
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="8">Never</label>
                    </div>
                    <div>
                        <input value="9" @change="(e) => formData.targeting[3] = e.target.value" name="t3" id="9"
                            type="radio">
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="9">If the visitor has
                            successfully
                            completed the action</label>
                    </div>
                    <div class="flex flex-row items-start">
                        <input value="10" @change="(e) => formData.targeting[3] = e.target.value" name="t3" id="10"
                            type="radio">
                        <label class="flex flex-row font-[inter] ml-[10px] text-[15px] leading-[15px]" for="10">
                            <div>
                                If the visitor has successfully completed the action or the pop-up has been shown
                                <input class="outline-none shadow-md w-10 text-[15px] mr-[10px] rounded-md p-[5px]" type="text" v-model="afterInput">
                                times.
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>


        <div class="h-[2px] bg-[#efefef]">
        </div>
        <div class="flex flex-row items-center justify-end gap-[10px]">
            <h1 @click="handleBack" class="underline underline-offset-[3px] cursor-pointer">Go back</h1>
            <RouterLink to="/behaviour"><button
                    class="border-solid border-[2px] border-black/20 p-[5px] rounded-[6px] font-[inter] text-[15px]">Continue</button>
            </RouterLink>
        </div>
    </div>
</template>