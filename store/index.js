import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },

    mutations: {
       setPosts: function (state, posts) {
				 state.posts = posts
			 }
    },

		actions: {
			async getPosts ({ commit }) {
				const data = await this.$axios.$get(`/posts`)
				commit('setPosts', data)
			}
		},

		getters: {
			posts: function (state) {
				return state.posts.slice(0, 6)
			}
		}
  })
}

export default createStore
