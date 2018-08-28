<template>
	<div class='[ w-100 pa3 white bg-dark-gray ]'>
		<div class='[ flex justify-between ]'>
			<div @click='toggleActive'>MENU</div>
			<div>LOGO</div>
		</div>
		<transition name='slide-fade'>
			<div v-if='active'>
				CONTENT
			</div>
		</transition>
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

<style scoped>
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all .3s ease;
	}

	.slide-fade-enter,
	.slide-fade-leave-to {
		opacity: 0;
		transform: translateX(-100px);
	}
</style>
