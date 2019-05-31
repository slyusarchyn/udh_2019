<template>
    <div class="register row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-group row">
                            <label for="login">Login:</label>
                            <input type="text" id="login" v-model="form.login" class="form-control" placeholder="Login"
                                   autocomplete="false">
                        </div>
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" id="email" v-model="form.email" class="form-control"
                                   placeholder="Email Address" autocomplete="false">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password" id="password" v-model="form.password" class="form-control"
                                   placeholder="Password" autocomplete="false">
                        </div>
                        <div class="form-group row">
                            <label for="password_confirmation">Password:</label>
                            <input type="password" id="password_confirmation" v-model="form.passwordConfirmation"
                                   class="form-control" placeholder="Password" autocomplete="false">
                        </div>
                        <div class="form-group row">
                            <input type="submit" class="btn btn-primary" value="Register">
                        </div>
                        <div class="form-group row" v-if="registerError">
                            <p class="error">
                                {{ registerError }}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {register} from '../../helpers/auth'

    export default {
        name: "register",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                error: null
            }
        },
        methods: {
            register() {
                this.$store.dispatch('register');

                register(this.$data.form)
                    .then((res) => {
                        this.$store.commit("registerSuccess", res);
                        this.$router.push({path: '/'});
                    })
                    .catch((error) => {
                        this.$store.commit("registerFailed", {error})
                    })
            }
        },
        computed: {
            registerError() {
                return this.$store.getters.registerError
            }
        }
    }
</script>

<style scoped>
    .error {
        text-align: center;
        color: red;
    }
</style>
