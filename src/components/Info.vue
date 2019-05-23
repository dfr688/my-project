<template>
  <div class="Info">
		<Top :infoTit="tit"></Top>
		<div class="detailInfo">
			<ul>
				<li>
					<p>
						头像
					</p>
					<div class="pic">
						<img src="../assets/images/head_01.png" alt="">
					</div>
				</li>
				<li>
					<p>
						手机号
					</p>
					<div class="phoneNum">
						<input type="number" value="18895623271" readonly/>
					</div>
				</li>
				<li>
					<p>
						性别
					</p>
					<div class="sex">
						<input type="radio" name="sex" id="man" checked/><label for="man">男</label>
						<input type="radio" name="sex" id="woman"/><label for="woman">女</label>
					</div>
				</li>
				<li>
					<p>
						学历
					</p>
					<div class="education">
						<input type="text" placeholder="请选择"/><span></span>
					</div>
				</li>
				<li>
					<p>
						身份
					</p>
					<div class="identify">
						<input type="text" placeholder="请选择"/><span></span>
					</div>
				</li>
			</ul>
		</div>
		
		
		
  </div>
</template>

<script>
	import Top from './Top'
	
	
export default {
  name: '',
  data () {
    return {
	  tit: "基本信息",
    }
  },
  components: {
	  Top
  },
	methods: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/info.css';
</style>
