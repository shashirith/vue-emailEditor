<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    name: String,
    src: String
})
import { RouterLink } from 'vue-router'

</script>

<template>
    <RouterLink  to="/content">
        <div @click="handleDesignClick">
            <div>
                <div class="drop-shadow-md">
                    <div class="bg-[#fff] rounded-t-[5px]">
                        <Icon  class="text-[40px] text-gray-400  leading-[30px]" icon="mi:options-horizontal" />
                    </div>
                    <div class="bg-[#efefef] rounded-b-[5px] rounded-[0px]">
    <!-- img -->
    <img :src="src" style="width: 300px; height: 280px; ">
</div>
                </div>
                <div>
                    <!-- title -->
                    <h1 class="text-[inter] font-semibold mt-[10px] text-sm">{{ name }}</h1>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
