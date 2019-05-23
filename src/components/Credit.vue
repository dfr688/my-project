<template>
  <div class="Credit">
		<Top :creditTit="tit"></Top>
		<div class="detailInfo">
			<ul>
				<li>
					<p>
						真实姓名
					</p>
					<div class="trueName">
						<input type="text" placeholder="请输入真实姓名"/>
					</div>
				</li>
				<li>
					<p>
						婚姻
					</p>
					<div class="marriage">
						<input type="radio" id="unmarried" name="marry" checked/><label for="unmarried">未婚</label>
						<input type="radio" id="married" name="marry"/><label for="married">已婚</label>
					</div>
				</li>
				<li>
					<p>
						身份证号
					</p>
					<div class="identifyNum">
						<input type="number" placeholder="请输入身份证号"/>
					</div>
				</li>
				<li>
					<p>
						所在城市
					</p>
					<div class="city">
						<input type="text" placeholder="请选择"/><span></span>
					</div>
				</li>
				<li>
					<p>
						芝麻信用
					</p>
					<div class="seed">
						<input type="number" placeholder="请输入"/><span></span>
					</div>
				</li>
				<li>
					<p>
						负债记录
					</p>
					<div class="debt">
						<input type="radio" id="yes" name="if" checked/><label for="yes">有</label>
						<input type="radio" id="no" name="if"/><label for="no">无</label>
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
		tit: "信用资料"
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
	@import '../../static/css/credit.css';
</style>
