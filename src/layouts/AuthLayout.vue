<script setup lang="ts">
import AuthAppHeader from '@/components/AuthAppHeader.vue'
import AppAside from '@/components/AppAside.vue'

</script>

<template>
    <div class="relative w-full">
        <AuthAppHeader/>
        
        <div class="relative w-full flex flex-row justify-between">
            <div class="relative w-[30%] lg:w-[25%]">
                <AppAside />
            </div>

            <main class="relative flex-grow p-8">
                <router-view/>
            </main>
        </div>
    </div>    

    <!-- <AuthAppFooter/> -->
</template>