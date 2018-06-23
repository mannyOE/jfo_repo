<template>
	<div>
		<carousel/>
		<div class="row quote">
			I do not believe that Nigeria will get better through endless prayers,night vigils and religious jamborees alone. We, Nigerians, must wake up to the truth that faith without works is metaphysical hogwash, nonsense and silly abracadabra. Nigeria can only get better when we stand up to work for it to be better while praying alongside.
		</div>
	</div>
</template>

<script>
import carousel from "../shared/carousel"
export default {
	components: {carousel}
}
</script>

<style scoped>
.quote {
	background: teal;
	color: white;
	height: auto;
	padding: 20px;
	margin: 20px 50px;
	text-align: center;
	font-size: 17px;
}
</style>


