<template>
	<div>
		<h1>Post page for {{$route.params.id}}</h1>
		<div v-if='post'>
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
		</div>
		<div v-else>
			POST NOT PRESENT
		</div>
	</div>
</template>

<script>
export default {
	asyncData ({ app, params }) {
		return app.$axios.$get(`/posts/${params.id}`)
			.then((res) => {
				return { post: res }
			})
	}
}
</script>

<style>
</style>
