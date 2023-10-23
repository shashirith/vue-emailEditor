<script setup>
defineProps({
    name:String,
    description:String,
    src:String,
    selected:String,
    id:String,
    fun: Function,
})
</script>

<template>
<div :style="{ borderColor: selected === id ? '#7192e9' : '' }"
                class="w-[210px] flex-col flex items-end px-[10px] py-[25px] border-solid border-[3px] rounded-[10px] dark:border-gray-700 bordered-container">
                <div class="w-fit">
                <input @change="$emit('change', $event)" :id="id" type="radio" :value="id" name="bordered-radio"
                class="mx-[10px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                style="outline: none;box-shadow: none;">
                </div>

                <label class="flex flex-col items-center" :for="id">
                    <img class="w-[100px]" :src="src" alt="embedded">
                    <h1 class="text-[15px] font-normal font-[inter] mt-[20px]">{{name}}</h1>
                    <p class="text-[15px] font-[inter] text-[#b2b3bb] font-normal text-center">{{ description }}</p>
                </label>
            </div>
</template>

<!-- <style>
  .w-fit input[type="radio"]:focus {
    outline: none;
    box-shadow: none;
}
</style> -->