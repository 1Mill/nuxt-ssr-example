<template>
	<div>
		<router-link to='/'>HOME</router-link>
		<h1>Post page for {{ $route.params.id }}</h1>
		<div v-if='post'>
			<h2>ID: {{ post.id }} -- {{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>
		<div v-else>
			POST NOT PRESENT
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	async fetch ({ store, params }) {
		await store.dispatch('getPostById', params.id)
	},

	computed: {
		...mapGetters([ 'post' ])
	}
}
</script>

<style>
</style>
