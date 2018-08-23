<template>
  <div>
		<h1>Index Page</h1>
		{{ posts }}
	</div>
</template>

<script>
import axios from 'axios'
import Post from '~/components/Post'

export default {
	async asyncData({ req, params }) {
		return axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				return { posts: res.data.slice(0, 5) }
			})
	},
	data: function () {
		return {
			posts: []
		}
	}
}
</script>

<style>
</style>
