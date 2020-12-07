<template>
    <div class="error-page">
        <h1>Oops, something went wrong!</h1>
        <!-- if js is cruch, nuxt-link will dead too, so here need to use a html -->
        <p>Back to <a href="/">safety</a>!</p>
    </div>
</template>

<style scoped>
.error-page {
    text-align: center;
}

.error-page a {
    text-decoration: none;
    color: red;
}

.error-page a:hover,
.error-page a:active {
    color: salmon;
}
</style>
