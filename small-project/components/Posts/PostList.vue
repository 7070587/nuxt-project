<template>
    <section class="post-list">
        <PostPreview
            v-for="post in posts"
            :key="post.id"
            :isAdmin='isAdmin'
            :id="post.id"
            :title='post.title'
            :previewText='post.previewText'
            :thumbnail='post.thumbnail'
        />
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
    name: "PostList",
    comments: { PostPreview },
    props: {
        isAdmin: {
            type: Boolean,
            required: false,
        },
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>