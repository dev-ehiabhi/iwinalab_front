<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
    components: {AppHeader, AppFooter}
}
</script>

<template>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit ipsum vel repudiandae ipsa dignissimos unde eius necessitatibus distinctio. Cupiditate repudiandae nulla libero iusto ullam! Sit quos quae reprehenderit. Nesciunt.</div>
    <AppHeader/>
        <router-view/>
    <AppFooter/>
</template>