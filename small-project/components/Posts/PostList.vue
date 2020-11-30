<template>
        <section class="post-list">
            <PostPreview
                id="4"
                title='Good!'
                previewText='Good Job!'
                thumbnail='https://images.unsplash.com/photo-1506542551059-c31e3fb9e32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
            />
            <PostPreview
                id="5"
                title='Find You'
                previewText='It us you'
                thumbnail='https://images.unsplash.com/photo-1551005916-83ed42ca6b49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
            />
            <PostPreview
                id="6"
                title='Just Do It'
                previewText='Do what you want'
                thumbnail='https://images.unsplash.com/photo-1591713587894-69f26799dd90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80'
            />
        </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
    comments: { PostPreview },
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