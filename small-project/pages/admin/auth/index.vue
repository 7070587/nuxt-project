<template>
    <div class="admin-auth-page">
        <div class="auth-container">
            <form @submit.prevent="submit">
                <AppControlInput
                    type="email"
                    v-model="authData.email"
                >E-Mail Address</AppControlInput>

                <AppControlInput
                    type="password"
                    v-model="authData.password"
                >Password</AppControlInput>

                <AppButton type="submit">{{ authData.isLogin ? 'Login' : 'Sign Up' }}</AppButton>

                <AppButton
                    type="button"
                    btn-style="inverted"
                    style="margin-left: 10px"
                    @click="authData.isLogin = !authData.isLogin"
                >Switch to {{ authData.isLogin ? 'Signup' : 'Login' }}</AppButton>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminAuthPage",
    layout: "admin",

    data() {
        return {
            authData: {
                isLogin: true,
                email: "",
                password: "",
            },
        };
    },

    methods: {
        submit() {
            this.$store
                .dispatch("authenticateUser", this.authData)
                .then(() => this.$router.push("/admin"))
                .catch((e) => console.log(e));
        },
    },
};
</script>

<style scoped>
.admin-auth-page {
    padding: 20px;
}

.auth-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
}
</style>

