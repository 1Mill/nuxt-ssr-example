<template>
  <div>
		<h1>Index Page</h1>
		<div v-for='post in posts' :key='post.id'>
      {{ post.id }}: {{ post.title }}
    </div>
	</div>
</template>

<script>
export default {
	async asyncData({ app }) {
		const data = await app.$axios.$get('/posts')
    return { posts: data.slice(0, 6) }
	}
}
</script>

<style>
</style>
