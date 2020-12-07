<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm
                :post='postData'
                @submit='submit'
            />
        </section>
    </div>
</template>

<script>
import axios from "axios";

import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
    components: { AdminPostForm },
    // layout: "admin",
    middleware: ["check-auth", "auth"],

    async asyncData(context) {
        // const url = `https://nuxt-blog-58689.firebaseio.com/posts/${context.params.postId}.json`;

        // way 1
        // const url = `${process.env.baseUrl}/posts/${context.params.postId}.json`;
        // let { data } = await axios.get(url).catch((e) => context.error(e));

        // way 2
        let data = await context.app.$axios
            .$get(`/posts/${context.params.postId}.json`)
            .catch((e) => context.error(e));

        return { postData: { ...data, id: context.params.postId } };
    },

    methods: {
        async submit(editedPost) {
            // way 1
            // const url = `https://nuxt-blog-58689.firebaseio.com/posts/${this.$route.params.postId}.json`;
            const url = `${process.env.baseUrl}/posts/${this.$route.params.postId}.json`;
            const param = { ...editedPost, updatedDate: new Date() };

            // let res = await axios
            //     .put(url, param)
            //     .catch((e) => console.error(e));

            // if (res?.statusCode === 200) {
            //     this.$router.push("/admin");
            //     // console.log("save success => ", res?.data);
            // }

            // way 2
            // const token =
            // let data = await this.$axios
            //     .$put(`/posts/${this.$route.params.postId}.json?auth=`, param)
            //     .catch((e) => context.error(e));

            // if (data) {
            //     this.$router.push("/admin");
            // }

            // way 3

            this.$store
                .dispatch("editPost", param)
                .then(() => this.$router.push("/admin"))
                .catch((e) => console.log(e));
        },
    },
};
</script>

<style lang="css" scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>