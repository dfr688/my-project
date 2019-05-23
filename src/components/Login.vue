<template>
  <div class="Login">
		<div class="headImg">
			<img src="../assets/images/head_01.png" alt="">
		</div>
		<ul>
			<li>
				<p>手机</p>
				<div class="wrap">
					<input type="text" id="phone" v-model="phone" placeholder="请输入您的手机号"/>
					<i v-show="tip1">手机号不能为空</i>
					<i v-show="tip2">请填写正确的手机号</i>
				</div>
			</li>
			<li class="vCode">
				<p>验证码</p>
				<div class="wrap">
					<input type="text" id="code" v-model="code" placeholder="请输入验证码"/>
					<div @click="getCode">
						<Vcode/>
					</div>
				</div>
				<i v-show="tip3">验证码不能为空</i>
			</li>
		</ul>
		<!-- <div class="forgetPsd">
			<router-link to="/forget">忘记密码?</router-link>
		</div> -->
		<div class="btn">
			<button @click="handleLogin">登录</button>
		</div>
		<!-- <div class="tip">
			<span>还没有账号?</span><router-link to="/register">立即注册</router-link>
		</div> -->
  </div>
</template>

<script>
	import Vcode from './Vcode'
	
export default {
  name: '',
  data () {
    return {
      phone: '',
	  code: '',
	  tip1: false,
	  tip2: false,
	  tip3: false
    }
  },
  components: {
	  Vcode
  },
  methods: {
	  //在点击获取验证码的时候 判断手机是否正确 是否为空
	  validatePhone() {
		  if(this.phone == ""){
			  this.tip1 = true;
			  this.tip2 = false;
			  return false
		  }else if(!/^1[3-9]\d{9}$/.test(this.phone)){
			  this.tip2 = true;
			  this.tip1 = false;
			  return false;
		  }else{
			  this.tip1 = false;
			  this.tip2 = false;
			  return true
		  }
	  },
	  // 获取验证码
	  getCode() {
		  if(this.validatePhone()){
			  //发送请求
			  const sign1 = this.baseJs.getSign({
			  	appKey : "daikuan",
			  	format : "json",
			  	method : "qxf.messsge.push",
			  	myParams : "{\"mobile\":\""+this.phone+"\",\"signKey\":\"messageSign-4\",\"type\":0,\"pkg\":\"xiaozhubaika5.8\"}",
			  	pkg : "qianqianqianqian",
			  	v : "1.0"
			  });
			  this.baseJs.postReq(JSON.stringify({
			  	appKey : "daikuan",
			  	format : "json",
			  	method : "qxf.messsge.push",
			  	myParams : "{\"mobile\":\""+this.phone+"\",\"signKey\":\"messageSign-4\",\"type\":0,\"pkg\":\"xiaozhubaika5.8\"}",
			  	pkg : "qianqianqianqian",
			  	sign : sign1,
			  	v : "1.0"
			  })).then(res => {
			  	console.log(res);
			  }).catch(err => {
			  	console.log(err)
			  });
		  }
	  },
	  // 点击登录 在点击登录之前 手机已经发送验证码
	  handleLogin() {
		  // 此时判断手机号和验证码是否为空即可
		  if(!this.phone =="" && !this.code ==""){
			  //都不为空时候 发送请求
			  const sign2 = this.baseJs.getSign({
			  	appKey : "daikuan",
			  	format : "json",
			  	method : "qxf.user.login",
			  	myParams : "{\"pkg\":\"xiaozhubaika5.8\",\"validCode\":\""+this.code+"\",\"mobile\":\""+this.phone+"\"}",
			  	pkg : "qianqianqianqian",
			  	v : "1.0"
			  });
			  this.baseJs.postReq(JSON.stringify({
			  	appKey : "daikuan",
			  	format : "json",
			  	method : "qxf.user.login",
			  	myParams : "{\"pkg\":\"xiaozhubaika5.8\",\"validCode\":\""+this.code+"\",\"mobile\":\""+this.phone+"\"}",
			  	pkg : "qianqianqianqian",
			  	sign : sign2,
			  	v : "1.0"
			  })).then(res => {
			  	console.log(res);
				// const userInfo = res.mobile + res.sessionId;
				// localStorage.setItem("user",userInfo);
				this.$router.push('/my');
			  }).catch(err => {
			  	console.log(err)
			  });
		  }else{
			  return false;
		  }
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/login.css';
</style>
