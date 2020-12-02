<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title"> {{ postData.title }} </h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ postData.updatedDate }}</div>
                <div class="post-detail">Written by {{ postData.auther }}</div>
            </div>
            <p class="post-content">{{ postData.content }}</p>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a></p>
        </section>
    </div>
</template>

<script>
export default {
    async asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({});
            }, 1500);
        }).catch((e) => context.error(new Error()));

        return await {
            postData: {
                id: "9",
                title: `NO!!!__ ${context.route.params.id}`,
                previewText: ">_<",
                auther: "sci",
                updatedDate: new Date(),
                content: "some content text ??",
                thumbnail:
                    "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg",
            },
        };
    },
};
</script>

<style scoped>
.single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
}

.post-title {
    margin: 0;
}

.post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
}

.post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
}

.post-feedback a {
    color: red;
    text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
    color: salmon;
}
</style>

