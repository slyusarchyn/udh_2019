<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>Maps</h1>
            </div>
            <div class="col text-right">
                <router-link :to="`/maps/new`"><button class="btn btn-primary">Add map</button></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="map in maps" :key="map.id">
                        <th scope="row">{{ map.id }}</th>
                        <td>{{ map.name }}</td>
                        <td>{{ map.description }}</td>
                        <td>{{ map.created_at }}</td>
                        <td>
                            <router-link :to="`/maps/${map.id}`">
                                <button type="button" class="btn btn-success">View</button>
                            </router-link>
                            <button type="button" class="btn btn-danger" @click="destroyMap(map.id)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {destroyMap, getMaps} from "../../helpers/map";

    export default {
        name: "map-list",
        computed: {
            maps() {
                return this.$store.getters.maps;
            }
        },
        mounted() {
            this.loadMaps();
        },
        methods: {
            loadMaps() {
                this.$store.dispatch('mapsLoading');
                getMaps()
                    .then((res) => {
                        this.$store.commit("mapsLoaded", res);
                    })
                    .catch((error) => {
                        this.$store.commit("mapsLoadingFailed", {error});
                    });
            },
            destroyMap(id) {
                this.$store.dispatch('mapDestroying');
                destroyMap(id)
                    .then((res) => {
                        this.$store.commit("mapDestroyed", res);
                    })
                    .catch((error) => {
                        alert(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
