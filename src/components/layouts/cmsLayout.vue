<template>
	<div class="">
		<Navigation />
		<router-view></router-view>
		<Footer/>
	</div>
</template>

<script type="text/javascript">
	import Navigation  from '../shared/cmsNav'
	import Footer  from '../shared/footer'
	export default {
		data(){
			return {

			}
		},
		components: {Navigation, Footer}
	}
</script>