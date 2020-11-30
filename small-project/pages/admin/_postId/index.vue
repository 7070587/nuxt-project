<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post='loadedPost' />
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
    components: { AdminPostForm },
    data() {
        return {
            loadedPost: {
                author: "sci",
                title: "awesome post",
                thumbnailLink:
                    "https://images.unsplash.com/flagged/photo-1591472672704-548ed9ec7611?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
                content: "Super Amazing!!",
            },
        };
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