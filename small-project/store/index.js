import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },

    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      }
    },

    actions: {
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },

    getters: {
      loadedPosts(state) {
        return state.posts;
      }
    }
  });
};

export default createStore;
