<template>
  <div class="Top">
		<div class="headTop">
			<span @click="backup" class="back"></span><slot></slot>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      
    }
  },
  methods: {
	  backup() {
		  window.history.back();
	  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Top .headTop{
		padding: .62rem .4rem .52rem .4rem;
		text-align: center;
		font-size: .46rem;
		color: #333;
	}
	.Top .headTop .back{
		display: inline-block;
		width: .23rem;
		height: .42rem;
		background: url(../../src/assets/images/back.png) no-repeat left top;
		background-size: 100%;
		position: absolute;
		top: .75rem;
		left: .4rem;
	}
</style>
