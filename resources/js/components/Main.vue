<template>
    <div id="main">
        <AppHeader></AppHeader>
        <div class="content">
            <router-view></router-view>
        </div>
        <loader></loader>
    </div>
</template>

<script>
    import AppHeader from "./Header";
    import Loader from "./Loader";
    export default {
        name: 'main-app',
        components: {Loader, AppHeader},
    }
</script>
