<template>
	<div class='[ w-100 pa3 white bg-dark-gray ]'>
		<div class='[ flex justify-between ]'>
			<div @click='toggleActive'>MENU</div>
			<div>LOGO</div>
		</div>
		<div v-if='active'>
			CONTENT
		</div>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			active: false
		}
	},

	methods: {
		toggleActive: function () {
			this.active = !this.active
		}
	}
}
</script>

<style>
</style>
