<template>
  <div>
		<div
		class='[ flex flex-row flex-wrap ]'
		>
			<router-link
			v-for='post in posts' :key='post.id'
			:to="'/posts/' + post.id"
			class='[ w-100 mb3 mt1 ph1 black no-underline ba b--silver ]'
			>
				<h1 class='[ lh-title f3 ttc ]'>{{ post.title }}</h1>
				<p class='[ lh-copy light-silver ]'>{{ post.body }}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([ 'posts' ])
	}
}
</script>

<style>
</style>
