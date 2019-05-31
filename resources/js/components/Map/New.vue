<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">Create map</div>
                    <div class="card-body">
                        <form @submit.prevent="createMap">
                            <div class="form-group row">
                                <label for="name">Map name</label>
                                <input type="text" id="name" v-model="form.name" class="form-control"
                                       placeholder="Map name">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" id="description" v-model="form.description"
                                          rows="3"></textarea>
                            </div>
                            <div class="form-group row">
                                <input type="submit" class="btn btn-primary" value="Create">
                            </div>
                            <div class="form-group row" v-if="createMapError">
                                <p class="error">
                                    {{ authError }}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {storeMap} from "../../helpers/map";

    export default {
        name: "map-new",
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                },
                error: null,
            }
        },
        methods: {
            createMap() {
                this.$store.dispatch('mapCreating');

                storeMap(this.$data.form)
                    .then((res) => {
                        this.$store.commit("mapCreated", res);
                        this.$router.push({path: '/maps'});
                    })
                    .catch((error) => {
                        alert(error);
                    })
            }
        },
        computed: {
            createMapError() {
                return this.$store.getters.createMapError
            }
        }
    }
</script>

<style scoped>

</style>
