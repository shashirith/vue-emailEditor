<script setup>
    import { Icon } from '@iconify/vue';
    defineProps({
        label: String,
        icon: Boolean
    })
</script>

<template>
    <div class="flex flex-row items-center w-fit gap-[5px]">
        <p class="font-[inter] text-white text-[12px]">
            {{label}}
        </p>
        <Icon v-if="icon" icon="mingcute:down-fill" class="text-white" />
    </div>
</template>