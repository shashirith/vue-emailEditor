<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const routes = {
    'Type': 1, 
    'Design': 2, 
    'Content': 3, 
    'Targeting': 4, 
    'Behaviour': 5
}
</script>

<template>
    <nav class="w-[100%] justify-between flex px-[50px] py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
        aria-label="Breadcrumb">
        <div>
            <h1 class="font-[inter] font-semibold">{{ route.name }}</h1>
        </div>
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <a :style="{ color: routes[route.name] === 1 ? 'black' : (routes[route.name] >  1 ? 'rgb(37 99 235)' : 'rgb(107 114 128)') }" href="#"
                    class="font-[inter] inline-flex items-center text-sm font-medium text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    Type
                </a>
            </li>
            <li>
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <a :style="{ color: routes[route.name] === 2 ? 'black' : (routes[route.name] >  2 ? 'rgb(37 99 235)' : 'rgb(107 114 128)') }" href="#"
                        class="font-[inter] ml-1 text-sm font-medium md:ml-2 dark:text-gray-400 dark:hover:text-white">Design</a>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span :style="{ color: routes[route.name] === 3 ? 'black' : (routes[route.name] >  3 ? 'rgb(37 99 235)' : 'rgb(107 114 128)')}"
                        class="font-[inter] ml-1 text-sm font-medium md:ml-2 dark:text-gray-400">Content</span>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span :style="{ color: routes[route.name] === 4 ? 'black' : (routes[route.name] >  4 ? 'rgb(37 99 235)' : 'rgb(107 114 128)') }"
                        class="font-[inter] ml-1 text-sm font-medium md:ml-2 dark:text-gray-400">Targeting</span>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span :style="{ color: routes[route.name] === 5? 'black' : (routes[route.name] >  5 ? 'rgb(37 99 235)' : 'rgb(107 114 128)') }"
                        class="font-[inter] ml-1 text-sm font-medium md:ml-2 dark:text-gray-400">Behaviour</span>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span :style="{ color: routes[route.name] === 6? 'black' : (routes[route.name] >  6 ? 'rgb(37 99 235)' : 'rgb(107 114 128)') }"
                        class="font-[inter] ml-1 text-sm font-medium md:ml-2 dark:text-gray-400">Success</span>
                </div>
            </li>
        </ol>
    </nav>
</template>