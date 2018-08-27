import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: null
    },

    mutations: {
       setPosts: function (state, posts) {
				 state.posts = posts
			 },

			 setPost: function (state, post) {
				 state.post = post
			 }
    },

		actions: {
			async getPosts ({ commit }) {
				const data = await this.$axios.$get(`/posts`)
				commit('setPosts', data)
			},

			async getPostById ({ commit }, id) {
				const data = await this.$axios.$get(`/posts/${id}`)
				commit('setPost', data)
			}
		},

		getters: {
			posts: function (state) {
				return state.posts.slice(0, 6)
			},

			post: function (state) {
				return state.post
			}
		}
  })
}

export default createStore
