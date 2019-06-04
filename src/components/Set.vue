<template>
  <div class="Set">
		<Top>设置</Top>
		<ul>
			<!-- <li>
				<router-link to="/modify">
					<p>修改密码</p>
					<div>
						<i></i>
					</div>
				</router-link>
			</li> -->
			<li>
				<p>版本信息</p>
				<div>
					V1.0
				</div>
			</li>
		</ul>
		<div class="signOut">
			<a href="javascript:void(0);" @click="signOut">退出登录</a>
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
  },
  methods: {
	  signOut() {
	  	  // 点击退出登录 清除缓存 跳转到我的页面
	  	  localStorage.removeItem("mobile");
	  	  localStorage.removeItem("sessionId");
	  	  this.$router.push("/my");
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/set.css';
</style>
