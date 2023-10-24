<script setup>
import { useRouter } from 'vue-router';
import { inject, ref, reactive, watch } from 'vue';
const router = useRouter();
const formData = inject('formData');
import axios from 'axios';

const val = ref("4");
const behaviourData = reactive({
    id: null,
    value: 4,
})

const makePostRequest = async () => {
  try {
    const response = await axios.post('http://localhost:3000/data', {formData});
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


const handleBack = () => {
    router.go(-1);
}

function isNumeric(num){
  return !isNaN(num)
}


watch(() => behaviourData.value,(newValue, prevValue) => {
    if(isNumeric(newValue) === false){
        behaviourData.value = prevValue;
    }
    if(newValue === ""){
        return;
    }
    if(newValue > 100){
        behaviourData.value = prevValue;
    }
    if (newValue < 1) {
        behaviourData.value = 1;
    }
});

const handleNext = () => {
    formData.success = behaviourData;
    makePostRequest()
}

</script>

<template>
    <div class="bg-[#f3f4f6] w-full h-[100vh] flex justify-center">
    <div class="w-[40%] flex flex-col gap-[20px] py-[50px]">
        <div>
            <div>
                <h1 class="font-[inter] font-medium">What happens after displaying succes screen?</h1>
                <p class="text-black/40 font-[inter] mt-[10px]">This is the screen visitors after succesfully submitting
                    your form.</p>
            </div>
            <div class="mt-[20px] flex flex-col gap-[10px]">
                <div class="flex flex-row items-center">
                    <input value="1" @change="(e) => behaviourData.id = e.target.value" name="t2" id="5" type="radio">
                    <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="5">Do nothing</label>
                </div>
                <div class="flex flex-row items-start">
                    <input value="2" @change="(e) => behaviourData.id = e.target.value" name="t2" id="7" type="radio">
                    <label class="flex flex-row font-[inter] ml-[10px] text-[15px] leading-[15px]" for="10">
                        <div>
                            If the visitor has successfully completed the action or the pop-up has been shown
                            <input :value="behaviourData.value" @input="(e) => behaviourData.value = e.target.value" class="outline-none shadow-md w-10 text-[15px] mr-[10px] rounded-md p-[5px]" type="text"
                                >
                            times.
                        </div>
                    </label>
                </div>
                <div>
                    <input value="3" @change="(e) => behaviourData.id = e.target.value" name="t2" id="6" type="radio">
                    <label class="font-[inter] ml-[10px] text-[15px] leading-[15px]" for="6">Redirect to URL</label>
                </div>
            </div>
        </div>
        <div class="h-[2px] bg-[#efefef]">
        </div>
        <div class="flex flex-row items-center justify-end gap-[10px]">
            <h1 @click="handleBack" class="underline underline-offset-[3px] cursor-pointer">Go back</h1>
            <button @click="handleNext"
                class="border-solid border-[2px] border-black/20 p-[5px] rounded-[6px] font-[inter] text-[15px]">Finish</button>
        </div>
    </div>
</div>
</template>