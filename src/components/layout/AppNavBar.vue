<template>
    <nav class="navbar navbar-expand-md">
        <!-- begin navbar-header -->
            <NavBarHeader />
        <!-- end navbar-header -->
        <!-- begin navigation -->
            <AppNavigation />
        <!-- end navigation -->
    </nav>
</template>

<script>
    import NavBarHeader from '/src/components/layout/NavBarHeader.vue'
    import AppNavigation from '/src/components/layout/AppNavigation.vue'

    export default {
        components: {
            NavBarHeader,
            AppNavigation
        }
    }
</script>