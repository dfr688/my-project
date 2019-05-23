<template>
  <div class="Modify">
		<Top>修改密码</Top>
		<ul>
			<li>
				<input type="text" placeholder="请输入原密码"/>
			</li>
			<li>
				<input type="text" placeholder="请输入新密码"/>
			</li>
		</ul>
		<div class="sure">
			<a href="#">确定</a>
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
	@import '../../static/css/modify.css';
</style>
