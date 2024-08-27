<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
    components: {AppHeader, AppFooter}
}
</script>

<template>
    <div class="w-full bg-gray-50">
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>
</template>