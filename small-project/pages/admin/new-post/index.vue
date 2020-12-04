<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit='submit' />
        </section>
    </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
    components: { AdminPostForm },
    // layout: "admin",
    methods: {
        async submit(postData) {
            // way 1
            // const url = "https://nuxt-blog-58689.firebaseio.com/posts.json";
            const param = { ...postData, updatedDate: new Date() };

            // let res = axios.post(url, param).catch((e) => console.error(e));

            // if (res?.statusCode === 200) {
            //     this.$router.push("/admin");
            //     // console.log("save success => ", res?.data);
            // }

            // way 2
            // let data = await this.$axios
            //     .$post(`/posts/.json`, param)
            //     .catch((e) => context.error(e));

            // if (data) {
            //     this.$router.push("/admin");
            // }

            // way 3
            this.$store
                .dispatch("addPost", param)
                .then(() => this.$router.push("/admin"))
                .catch((e) => console.log(e));
        },
    },
};
</script>

<style scoped>
.new-post-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .new-post-form {
        width: 500px;
    }
}
</style>