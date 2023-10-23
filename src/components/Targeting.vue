<script setup>
import { Icon } from "@iconify/vue";
import { ref, watch, inject, computed, reactive, unref } from "vue";
import { useRouter } from "vue-router";
const selectedData = reactive({
    target1: {
        id: null,
        value: {
            1: "50",
            2: "5",
        },
    },
    target2: {
        id: null,
        value: "3",
    },
    target3: {
        id: null,
        value: "3",
    },
});

function getCurrentFormattedDateTime() {
    const currentDate = new Date();
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    const formattedDate = currentDate.toLocaleString("en-US", options);
    return formattedDate;
}

const formattedDateTime = ref(getCurrentFormattedDateTime());

const showAdvance = ref(false);

const router = useRouter();

const formData = inject("formData");

function isNumeric(num) {
    return !isNaN(num);
}

watch(
    () => selectedData.target1.value[1],
    (newValue, prevValue) => {
        if (isNumeric(newValue) === false) {
            selectedData.target1.value[1] = prevValue;
        }
        if (newValue === "") {
            return;
        }
        if (newValue > 100) {
            selectedData.target1.value[1] = prevValue;
        } else if (newValue < 1) {
            selectedData.target1.value[1] = 1;
        }
    }
);

watch(
    () => selectedData.target2.value,
    (newValue, prevValue) => {
        if (isNumeric(newValue) === false) {
            selectedData.target2.value = prevValue;
        }
        if (newValue === "") {
            return;
        }
        if (newValue > 100) {
            selectedData.target2.value = prevValue;
        }
        if (newValue < 1) {
            selectedData.target2.value = 1;
        }
    }
);

watch(
    () => selectedData.target1.value[2],
    (newValue, prevValue) => {
        if (isNumeric(newValue) === false) {
            selectedData.target1.value[2] = prevValue;
        }
        if (newValue === "") {
            return;
        }
        if (newValue > 100) {
            selectedData.target1.value[2] = prevValue;
        }
        if (newValue < 1) {
            selectedData.target1.value[2] = 1;
        }
    }
);

watch(
    () => selectedData.target3.value,
    (newValue, prevValue) => {
        if (isNumeric(newValue) === false) {
            selectedData.target3.value = prevValue;
        }
        if (newValue === "") {
            return;
        }
        if (newValue > 100) {
            selectedData.target3.value = prevValue;
        }
        if (newValue < 1) {
            selectedData.target3.value = 1;
        }
    }
);

const handleAdvance = () => {
    showAdvance.value = !showAdvance.value;
};

const handleBack = () => {
    router.go(-1);
};

const handleNext = async () => {
    formData.targeting = selectedData;
    router.push("/behaviour");
};
</script>
<template>
    <div class="bg-[#f3f4f6] height w-full flex flex-col items-center justify-between">
        <div class="w-[40%] flex flex-col gap-[20px] py-[50px]">
            <div>
                <div>
                    <h1 class="font-[inter] font-medium">Show the popup when visitor:</h1>
                </div>
                <div class="mt-[20px] flex flex-col gap-[10px]">
                    <div class="flex flex-row items-center">
                        <input @input="(e) => (selectedData.target1.id = e.target.value)" name="t1" value="1" id="1"
                            type="radio" />
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="1">Enters Website</label>
                    </div>
                    <div>
                        <input @input="(e) => (selectedData.target1.id = e.target.value)" name="t1" value="2" id="2"
                            type="radio" />
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="2">Exits Website</label>
                    </div>
                    <div class="flex flex-row items-center">
                        <input @input="(e) => (selectedData.target1.id = e.target.value)" name="t1" value="3" id="3"
                            type="radio" />
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px] flex flex-row items-center" for="3">
                            <p class="text-[15px] leading-[15px]">on</p>
                            <div
                                class="mx-[10px] rounded-md drop-shadow-md p-[5px] pr-[15px] bg-white flex flex-row items-center justify-center">
                                <span class="pr-[10px]">
                                    <input :value="selectedData.target1.value[1]"
                                        @input="selectedData.target1.value[1] = $event.target.value"
                                        class="text-[15px] w-[25px] outline-none bg-white/0" type="text" />
                                    %
                                </span>
                                <div>
                                    <Icon @click="selectedData.target1.value[1]++" class="text-[6px]"
                                        icon="mingcute:up-line" />
                                    <Icon @click="selectedData.target1.value[1]--" class="text-[6px]"
                                        icon="mingcute:down-line" />
                                </div>
                            </div>
                            <h1>page scroll</h1>
                        </label>
                    </div>
                    <div class="flex flex-row items-center">
                        <input @input="(e) => (selectedData.target1.id = e.target.value)" name="t1" value="4" id="4"
                            type="radio" />
                        <label class="font-[inter] ml-[10px] text-[15px] leading-[15px] flex flex-row items-center" for="4">
                            <p class="text-[15px] leading-[15px]">After</p>
                            <div
                                class="mx-[10px] rounded-md drop-shadow-md p-[5px] bg-white flex flex-row items-center justify-center">
                                <input :value="selectedData.target1.value[2]"
                                    @input="selectedData.target1.value[2] = $event.target.value"
                                    class="text-[15px] w-[30px] outline-none bg-white/0" type="text" />
                                <div>
                                    <Icon @click="selectedData.target1.value[2]++" class="text-[6px]"
                                        icon="mingcute:up-line" />
                                    <Icon @click="selectedData.target1.value[2]--" class="text-[6px]"
                                        icon="mingcute:down-line" />
                                </div>
                            </div>
                            <h1>seconds on website</h1>
                        </label>
                    </div>
                </div>
            </div>
            <div class="h-[2px] bg-[#efefef]"></div>
            <div @click="handleAdvance" class="flex flex-row items-center gap-[5px]">
                <h1 class="text-[15px] text-blue-600">Advanced</h1>
                <Icon class="text-blue-600" icon="mingcute:down-fill" />
            </div>

            <div v-if="showAdvance" class="flex flex-col gap-[20px]">
                <div>
                    <div>
                        <h1 class="font-[inter] font-medium">
                            Show the popup when visitor:
                        </h1>
                        <p class="text-black/40 font-[inter] mt-[10px]">
                            Set the period when you want to show the popup to the same visitor
                            if the didn't subscribe
                        </p>
                    </div>
                    <div class="mt-[20px] flex flex-col gap-[10px]">
                        <div class="flex flex-row items-center">
                            <input value="5" @input="(e) => (selectedData.target2.id = e.target.value)" name="t2" id="1"
                                type="radio" />
                            <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="5">Every page view</label>
                        </div>
                        <div>
                            <input value="6" @input="(e) => (selectedData.target2.id = e.target.value)" name="t2" id="2"
                                type="radio" />
                            <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="6">Every new browser
                                session</label>
                        </div>
                        <div class="flex flex-row items-center">
                            <input value="7" @input="(e) => (selectedData.target2.id = e.target.value)" name="t2" id="3"
                                type="radio" />
                            <label class="font-[inter] ml-[10px] text-[15px] leading-[15px] flex flex-row items-center"
                                for="7">
                                <p class="text-[15px] leading-[15px]">After</p>
                                <div
                                    class="mx-[10px] rounded-md drop-shadow-md p-[5px] bg-white flex flex-row items-center justify-center">
                                    <input :value="selectedData.target2.value"
                                        @input="selectedData.target2.value = $event.target.value"
                                        class="text-[15px] w-[30px] outline-none bg-white/0" type="text" />
                                </div>
                                <h1>Days</h1>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="h-[2px] bg-[#efefef]"></div>
                <div>
                    <div>
                        <h1 class="font-[inter] font-medium">
                            When to stop showing the popup
                        </h1>
                    </div>
                    <div class="mt-[20px] flex flex-col gap-[10px]">
                        <div class="flex flex-row items-center">
                            <input value="8" @input="(e) => (selectedData.target3.id = e.target.value)" name="t3" id="1"
                                type="radio" />
                            <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="8">Never</label>
                        </div>
                        <div>
                            <input value="9" @input="(e) => (selectedData.target3.id = e.target.value)" name="t3" id="2"
                                type="radio" />
                            <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="9">If the visitor has
                                successfully completed the action</label>
                        </div>
                        <div class="flex flex-row items-start">
                            <input value="10" @input="(e) => (selectedData.target3.id = e.target.value)" name="t3" id="3"
                                type="radio" />
                            <label class="flex flex-row font-[inter] ml-[10px] text-[15px] leading-[15px]" for="10">
                                <div>
                                    If the visitor has successfully completed the action or the
                                    pop-up has been shown
                                    <input class="outline-none shadow-md w-10 text-[15px] mr-[10px] rounded-md p-[5px]"
                                        type="text" v-model="selectedData.target3.value" />
                                    times.
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="h-[2px] bg-[#efefef]"></div>
            </div>
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
        <div class="w-full bg-white shadow-md py-4 px-4 flex justify-end items-center space-x-6">
            <span class="text-gray-500 shadow-text">Last updated: <span>{{ formattedDateTime }}</span></span>
            <button @click="formattedDateTime = getCurrentFormattedDateTime()"
                class="bg-[#12B981] text-white rounded px-4 py-2">
                Update
            </button>
        </div>
    </div>
</template>

<style scoped>
.height {
    min-height: calc(100vh - 100px);
}
</style>
