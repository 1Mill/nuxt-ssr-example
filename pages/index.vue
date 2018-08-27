<template>
  <div>
		<h1>Index Page</h1>
		<div v-for='post in posts' :key='post.id'>
			<router-link :to="'/posts/' + post.id">{{ post.id }}: {{ post.title }}</router-link>
    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	async fetch ({ store, params }) {
		await store.dispatch('getAllPosts')
	},

	computed: {
		...mapGetters([ 'posts' ])
	}
}
</script>

<style>
</style>
