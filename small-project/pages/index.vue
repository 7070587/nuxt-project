<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest tech news!</h1>
        </section>
        <section class="featured-posts">
            <PostPreview
                id="1"
                title='How are you'
                previewText='Wish you'
                thumbnail='https://images.unsplash.com/photo-1575989356732-a6f467b97e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80'
            />
            <PostPreview
                id="2"
                title='3QQQQ'
                previewText='Thanks a lot'
                thumbnail='https://images.unsplash.com/photo-1604513644626-182145958737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
            />
            <PostPreview
                id="3"
                title='Enjoy!'
                previewText='Have good time'
                thumbnail='https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
            />
        </section>
    </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
    comments: { PostPreview },
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
