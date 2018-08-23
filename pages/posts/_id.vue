<template>
	<div>
		<h1>Post page for {{$route.params.id}}</h1>
		<div>
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
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
