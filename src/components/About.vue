<template>
  <div class="About">
		<Top>关于我们</Top>
		<div class="version">
			<div class="icon">
				<img src="../assets/images/about.png" alt=""/>
			</div>
			<p>
				51即刻有v1.10
			</p>
		</div>
		<div class="msg">
			<p>51即刻有是由铁岭乐悠悠金融外包服务有限公司旗下的网贷平台</p>
			<p>官方微信：51999闪电生活</p>
			<p>合作邮箱：shandian999@163.com</p>
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
