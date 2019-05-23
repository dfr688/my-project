<template>
  <div class="About">
		<Top>关于我们</Top>
		<div class="version">
			<div class="icon">
				<img src="../assets/images/head_02.png" alt="">
			</div>
			<p>
				借贷 V5.0
			</p>
		</div>
		<div class="msg">
			<p>借贷宝Lite是人人行科技股份有限公司旗下的网贷平台</p>
			<p>商务合作：2880505123@qq.com</p>
		</div>
  </div>
</template>

<script>
	import Top from "./Top"
	
export default {
  name: '',
  data () {
    return {
     
    }
  },
  components: {
	  Top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/about.css';
</style>
