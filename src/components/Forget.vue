<template>
  <div class="Forget">
		<Top>找回密码</Top>
		<div class="registerInfo">
			<ul>
				<li>
					<p>手机</p>
					<input type="text" placeholder="请输入您的手机号"/>
				</li>
				<li class="vCode">
					<p>验证码</p>
					<input type="text" placeholder="请输入您收到的验证码"/>
					<div>
						<Vcode/>
					</div>
				</li>
				<li>
					<p>密码</p>
					<input type="password" placeholder="请输入您的密码"/>
				</li>
				<li>
					<p>确认密码</p>
					<input type="password" placeholder="请再次输入您的密码"/>
				</li>
			</ul>
		</div>
		<div class="registerBtn">
			<a href="#">确定</a>
		</div>
  </div>
</template>

<script>
	import Top from './Top'
	import Vcode from './Vcode'
	
export default {
  name: '',
  data () {
    return {
      
    }
  },
  components: {
	  Top,
	  Vcode
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/forget.css';
</style>
