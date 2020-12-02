<template>
    <div class="posts-page">
        <PostList :posts='posts' />
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";

export default {
    comments: { PostList },

    // fetch
    // async fetch(context) {
    //     // if (context.store.state.posts.length > 0) return null;
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 posts: [
    //                     {
    //                         id: "1",
    //                         title: "How are you",
    //                         previewText: "Wish you",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1575989356732-a6f467b97e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80",
    //                     },
    //                     {
    //                         id: "2",
    //                         title: "3QQQQ",
    //                         previewText: "Thanks a lot",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1604513644626-182145958737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    //                     },
    //                     {
    //                         id: "3",
    //                         title: "Enjoy!",
    //                         previewText: "Have good time",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    //                     },
    //                     {
    //                         id: "4",
    //                         title: "Good!",
    //                         previewText: "Good Job!",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1506542551059-c31e3fb9e32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    //                     },
    //                     {
    //                         id: "5",
    //                         title: "Find You",
    //                         previewText: "It us you",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1551005916-83ed42ca6b49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    //                     },
    //                     {
    //                         id: "6",
    //                         title: "Just Do It",
    //                         previewText: "Do what you want",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1591713587894-69f26799dd90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80",
    //                     },
    //                     {
    //                         id: "7",
    //                         title: "Wo!!",
    //                         previewText: "What happen?",
    //                         thumbnail:
    //                             "https://images.pexels.com/photos/2148815/pexels-photo-2148815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //                     },
    //                     {
    //                         id: "8",
    //                         title: "OH! YAH!!",
    //                         previewText: "I am winner",
    //                         thumbnail:
    //                             "https://images.pexels.com/photos/1640820/pexels-photo-1640820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //                     },
    //                 ],
    //             });
    //         }, 1500);

    //         // reject(new Error());
    //     })
    //         .then((data) => context.store.commit("setPosts", data.posts))
    //         .catch((e) => context.error(new Error()));
    // },

    computed: {
        posts() {
            return this.$store.getters.loadedPosts;
        },
    },

    // // this asyncData only in nuxt pages
    // async asyncData(context) {
    // return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 posts: [
    //                     {
    //                         id: "1",
    //                         title: "How are you",
    //                         previewText: "Wish you",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1575989356732-a6f467b97e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80",
    //                     },
    //                     {
    //                         id: "2",
    //                         title: "3QQQQ",
    //                         previewText: "Thanks a lot",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1604513644626-182145958737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    //                     },
    //                     {
    //                         id: "3",
    //                         title: "Enjoy!",
    //                         previewText: "Have good time",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    //                     },
    //                     {
    //                         id: "4",
    //                         title: "Good!",
    //                         previewText: "Good Job!",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1506542551059-c31e3fb9e32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    //                     },
    //                     {
    //                         id: "5",
    //                         title: "Find You",
    //                         previewText: "It us you",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1551005916-83ed42ca6b49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    //                     },
    //                     {
    //                         id: "6",
    //                         title: "Just Do It",
    //                         previewText: "Do what you want",
    //                         thumbnail:
    //                             "https://images.unsplash.com/photo-1591713587894-69f26799dd90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80",
    //                     },
    //                     {
    //                         id: "7",
    //                         title: "Wo!!",
    //                         previewText: "What happen?",
    //                         thumbnail:
    //                             "https://images.pexels.com/photos/2148815/pexels-photo-2148815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //                     },
    //                     {
    //                         id: "8",
    //                         title: "OH! YAH!!",
    //                         previewText: "I am winner",
    //                         thumbnail:
    //                             "https://images.pexels.com/photos/1640820/pexels-photo-1640820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //                     },
    //                 ],
    //             });
    //         }, 1500);

    // reject(new Error());
};
//         .then((data) => data)
//         .catch((e) => context.error(new Error()));
// },

// created() {
//     this.$store.dispatch("setPosts", this.posts);
// },
</script>

<style lang="css" scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>