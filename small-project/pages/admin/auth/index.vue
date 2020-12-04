<template>
    <div class="admin-auth-page">
        <div class="auth-container">
            <form @submit.prevent="submit">
                <AppControlInput
                    type="email"
                    v-model="email"
                >E-Mail Address</AppControlInput>

                <AppControlInput
                    type="password"
                    v-model="password"
                >Password</AppControlInput>

                <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>

                <AppButton
                    type="button"
                    btn-style="inverted"
                    style="margin-left: 10px"
                    @click="isLogin = !isLogin"
                >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>

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
            isLogin: true,
            email: "",
            password: "",
        };
    },

    methods: {
        async submit() {
            const urlLogin = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`;
            const urlSignin = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`;
            const params = {
                email: this.email,
                password: this.password,
                returnSecureToken: true,
            };

            if (!this.isLogin) {
                let res = await this.$axios
                    .$post(urlSignin, params)
                    .catch((e) => console.log(e));

                if (res.idToken) console.log(" => ", res);
            } else {
                let res = await this.$axios
                    .$post(urlLogin, params)
                    .catch((e) => console.log(e));

                if (res.idToken) console.log(" => ", res);
            }
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

