<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const formData = inject('formData');

defineProps({
    name: String,
    src: String
})

const router = useRouter();

const handleChange = (name) => {
    formData.design = name;
    router.push('/content')
}


</script>

<template>
    <div @click="() => handleChange(name)">
        <div>
            <div class="drop-shadow-md">
                <div class="bg-[#fff] rounded-t-[5px]">
                    <Icon class="text-[40px] text-gray-400  leading-[30px]" icon="mi:options-horizontal" />
                </div>
                <div class="bg-[#efefef] rounded-b-[5px] rounded-[0px]">
                    <!-- img -->
                    <img :src="src" style="width: 250px; height: 250px; ">
                </div>
            </div>
            <div>
                <!-- title -->
                <h1 class="text-[inter] font-semibold mt-[10px] text-sm">{{ name }}</h1>
            </div>
        </div>
    </div>
</template>
