import Vuex from "vuex";
import axios from "axios";

export const state = () => ({
  posts: [],
  token: null
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },

  addPost(state, post) {
    state.posts.push(post);
  },

  editPost(state, editedPost) {
    const postIndex = state.posts.findIndex(post => post.id === editedPost.id);
    state.posts[postIndex] = editedPost;
  },

  setToken(state, token) {
    state.token = token;
  }
};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    // https://nuxt-blog-58689.firebaseio.com/posts.json
    // way 1
    // const url = `${process.env.baseUrl}/posts.json`;
    // let { data } = await axios.get(url).catch(e => context.error(e));

    // const postsArray = [];
    // if (data) {
    //   (Object.keys(data) || []).forEach(key =>
    //     postsArray.push({
    //       ...data[key],
    //       id: key
    //     })
    //   );
    // }

    // way 2
    let data = await context.app.$axios
      .$get("/posts.json")
      .catch(e => context.error(e));

    const postsArray = [];
    if (data) {
      (Object.keys(data) || []).forEach(key =>
        postsArray.push({
          ...data[key],
          id: key
        })
      );
    }
    return vuexContext.commit("setPosts", postsArray);
  },

  // nuxt only, can init once server data at first
  // fake data
  //   nuxtServerInit(vuexContext, context) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         vuexContext.commit("setPosts", [
  //           {
  //             id: "1",
  //             title: "How are you",
  //             previewText: "Wish you",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1575989356732-a6f467b97e97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80"
  //           },
  //           {
  //             id: "2",
  //             title: "3QQQQ",
  //             previewText: "Thanks a lot",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1604513644626-182145958737?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
  //           },
  //           {
  //             id: "3",
  //             title: "Enjoy!",
  //             previewText: "Have good time",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
  //           },
  //           {
  //             id: "4",
  //             title: "Good!",
  //             previewText: "Good Job!",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1506542551059-c31e3fb9e32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
  //           },
  //           {
  //             id: "5",
  //             title: "Find You",
  //             previewText: "It us you",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1551005916-83ed42ca6b49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  //           },
  //           {
  //             id: "6",
  //             title: "Just Do It",
  //             previewText: "Do what you want",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1591713587894-69f26799dd90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80"
  //           },
  //           {
  //             id: "7",
  //             title: "Wo!!",
  //             previewText: "What happen?",
  //             thumbnail:
  //               "https://images.pexels.com/photos/2148815/pexels-photo-2148815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  //           },
  //           {
  //             id: "8",
  //             title: "OH! YAH!!",
  //             previewText: "I am winner",
  //             thumbnail:
  //               "https://images.pexels.com/photos/1640820/pexels-photo-1640820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  //           }
  //         ]);
  //         resolve({});
  //       }, 1500);

  //       // reject(new Error());
  //     });
  //   },

  async addPost(vuexContext, postData) {
    const param = { ...postData, updatedDate: new Date() };
    let data = await this.$axios
      .$post("/posts.json", param)
      .catch(e => console.log(e));

    const returnData = { ...param, id: data.name };
    return vuexContext.commit("addPost", returnData);
  },

  async editPost(vuexContext, postData) {
    await this.$axios
      .$put(`/posts/${postData.id}.json`, postData)
      .catch(e => console.log(e));

    return vuexContext.commit("editPost", postData);
  },

  async authenticateUser(vuexContext, authData) {
    const urlLogin = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`;
    const urlSignin = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`;
    const params = {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    };

    let res;

    if (!authData.isLogin) {
      res = await this.$axios
        .$post(urlSignin, params)
        .catch(e => console.log(e));
    } else {
      res = await this.$axios
        .$post(urlLogin, params)
        .catch(e => console.log(e));
    }

    console.log("res.idToken => ", res.idToken);
    if (res.idToken) return vuexContext.commit("setToken", res.idToken);
  },

  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  }
};

export const getters = {
  loadedPosts(state) {
    return state.posts;
  }
};
