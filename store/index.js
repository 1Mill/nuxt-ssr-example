import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },

    mutations: {
       setAllStorePosts: function (state, payload) {
				 state.posts = payload
			 },

			 setStorePost: function (state, payload) {
				 state.post = payload
			 }
    },

		actions: {
			async nuxtServerInit ({ commit }) {
				const data = await this.$axios.$get(`/posts`)
				commit('setAllStorePosts', data)
			},

			getPostById ({ state, commit }, id) {
				const post = state.posts.find(post => post.id == id)
				commit('setStorePost', post)
			}
		},

		getters: {
			posts: function (state) {
				return state.posts
			},

			post: function (state) {
				return state.post
			}
		}
  })
}

export default createStore
