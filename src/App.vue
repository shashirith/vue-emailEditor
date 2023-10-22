<script setup>
import Navbar from './components/Navbar.vue'
import SubNav from './components/SubNav.vue'
import { RouterView, useRoute } from 'vue-router'
import { KeepAlive, reactive, provide, watch } from 'vue';

const route = useRoute();

const formData = reactive({
  type: "",
  design: "",
  content: null,
  targeting: {
    1: "",
    2: "",
    3: ""
  },
  behaviour: ""
})
provide('formData', formData);

watch(formData, (newValue, prevValue) => {
  console.log(newValue);
})
</script>

<template>
  <div class="flex flex-col items-center">
    <Navbar v-if="route.path !== '/content'" />
    <SubNav v-if="route.path !== '/content'" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :formData = "formData" />
      </keep-alive>
    </router-view>
  </div>
</template>