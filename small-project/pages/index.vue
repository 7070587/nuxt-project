<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest nature images!</h1>
        </section>
        <section class="featured-posts">
            <PostList :posts='posts' />
        </section>
    </div>
</template>

<script>

export default {
    // data() {
    //     return {
    //         posts: [],
    //     };
    // },

    // this asyncData only in nuxt pages
    // async asyncData() {
    //     return await {
    //         posts: [
    //             {
    //                 id: "1",
    //                 title: "How are you",
    //                 previewText: "Wish you",
    //                 thumbnail:
    //                     "https://images.unsplash.com/photo-1575989356732-a6f467b97e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80",
    //             },
    //             {
    //                 id: "2",
    //                 title: "3QQQQ",
    //                 previewText: "Thanks a lot",
    //                 thumbnail:
    //                     "https://images.unsplash.com/photo-1604513644626-182145958737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    //             },
    //             {
    //                 id: "3",
    //                 title: "Enjoy!",
    //                 previewText: "Have good time",
    //                 thumbnail:
    //                     "https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    //             },
    //             {
    //                 id: "4",
    //                 title: "Good!",
    //                 previewText: "Good Job!",
    //                 thumbnail:
    //                     "https://images.unsplash.com/photo-1506542551059-c31e3fb9e32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    //             },
    //             {
    //                 id: "5",
    //                 title: "Find You",
    //                 previewText: "It us you",
    //                 thumbnail:
    //                     "https://images.unsplash.com/photo-1551005916-83ed42ca6b49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    //             },
    //             {
    //                 id: "6",
    //                 title: "Just Do It",
    //                 previewText: "Do what you want",
    //                 thumbnail:
    //                     "https://images.unsplash.com/photo-1591713587894-69f26799dd90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80",
    //             },
    //             {
    //                 id: "7",
    //                 title: "Wo!!",
    //                 previewText: "What happen?",
    //                 thumbnail:
    //                     "https://images.pexels.com/photos/2148815/pexels-photo-2148815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //             },
    //             {
    //                 id: "8",
    //                 title: "OH! YAH!!",
    //                 previewText: "I am winner",
    //                 thumbnail:
    //                     "https://images.pexels.com/photos/1640820/pexels-photo-1640820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //             },
    //         ],
    //     };
    // },

    // use data from vuex
    computed: {
        posts() {
            return this.$store.getters.loadedPosts;
        },
    },
};
</script>


<style scoped>
.intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url("~assets/images/1.jpg");
}

.intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
}

@media (min-width: 768px) {
    .intro h1 {
        font-size: 2rem;
    }
}

.featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
