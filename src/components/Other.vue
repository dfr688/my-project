<template>
  <div class="other">
		<div class="wrap">
			<div class="back">
				<span @click="returnBack"></span>{{ tit}}
			</div>
		</div>
		<iframe :src="url" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      url: "",
	  tit: ""
    }
  },
	methods: {
		returnBack() {
			this.$router.go(-1);
		}
	},
	created() {
		this.url = this.$route.params.url;
		this.tit = this.$route.params.tit;
		// console.log(this.url);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.other{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.other .wrap{
		height: .84rem;
	}
	.other .wrap .back{
		font-size: .46rem;
		padding: .2rem .4rem;
		width: 100%;
		/* height: .84rem; */
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		text-align: center;
	}
	.other .wrap .back span{
		display: inline-block;
		width: .22rem;
		height: .42rem;
		background: url(../assets/images/back.png) no-repeat left top;
		background-size: 100%;
		position: absolute;
		top: .3rem;
		left: .4rem;
	}
	.other iframe{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
