<template>
    <div>
        <TheHeader @sidenavToggle='displaySideNav = !displaySideNav' />
        <TheSidenav
            :show='displaySideNav'
            @close='displaySideNav = false'
        />

        <Nuxt />
    </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";

export default {
    comments: { TheHeader, TheSidenav },
    // middleware: "log",
    data() {
        return {
            displaySideNav: false,
        };
    },
};
</script>

<style>
html {
    font-family: "Acme", sans-serif;
}

body {
    margin: 0;
}
</style>
