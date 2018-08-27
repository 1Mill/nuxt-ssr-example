<template>
	<div>
		<router-link to='/'>HOME</router-link>
		<h1>Post page for {{ $route.params.id }}</h1>
		<div>
			<h2>ID: {{ post.id }} -- {{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	beforeCreate: function () {
		this.$store.dispatch('getPostById', this.$route.params.id)
	},

	computed: {
		...mapGetters([ 'post' ])
	}
}
</script>

<style>
</style>
