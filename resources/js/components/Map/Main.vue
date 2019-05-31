<template>
    <div class="container-fluid">
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'map-main'
    }
</script>

<style scoped>
    .container-fluid {
        padding: 0;
        margin: 0;
    }
</style>
