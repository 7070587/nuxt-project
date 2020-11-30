<template>
    <div class="posts-page">
        <PostList />
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";

export default {
    comments: { PostList },
};
</script>

<style lang="css" scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>