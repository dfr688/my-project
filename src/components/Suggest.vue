<template>
  <div class="Suggest">
		<Top>意见反馈</Top>
		<div class="type">
			<p>反馈类型</p>
			<div>
				<input type="radio" name="king" id="consult" checked/><label for="consult">咨询</label>
				<input type="radio" name="king" id="suggest"/><label for="suggest">建议</label>
				<input type="radio" name="king" id="other"/><label for="other">其他</label>
			</div>
		</div>
		<div class="feedback">
			<p>意见反馈</p>
			<div>
				<textarea name="" id="" placeholder="详细叙述你的建议，我们将不断改善"></textarea>
			</div>
		</div>
		<div class="contact">
			<p>联系方式</p>
			<div>
				<input type="text" placeholder="请输入手机号或邮箱，以便我们给你反馈">
			</div>
		</div>
		<div class="btn">
			<button @click="sureBtn">确定</button>
		</div>
  </div>
</template>

<script>
	import Top from "./Top"
	import { Toast } from 'mint-ui'
	
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
	  sureBtn() {
		  Toast("感谢您的宝贵建议！");
		  this.$router.push("/my");
	  }
  }
}
</script>


<style scoped>
	@import '../../static/css/suggest.css';
</style>
