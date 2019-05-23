<template>
  <div class="Detail">
		<div class="headTop">
			<span @click="returnBack" class="back"></span>{{ all.lenderName }}
		</div>
		<div class="detailInfo">
			<div class="top">
				<div>
					<img :src="all.imagePrefix + all.lenderLogo" alt="">
				</div>
				<span>{{ all.lenderName }}</span>
				<p v-html="all.description"></p>
				<ul>
					<li>高成功率</li>
					<li>秒到账</li>
					<li>新口子</li>
				</ul>
			</div>
			<div class="bottom">
				<ul>
					<li>
						<span>日利率</span>
						<p>{{ all.lenderRate }}</p>
					</li>
					<li>
						<span>额度范围</span>
						<p>{{ all.lenderRangeMoney }}</p>
					</li>
					<li>
						<span>还款期限(月)</span>
						<p>{{ all.loanPeriod }}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="explain">
			<ul>
				<li class="addUp">
					<p><i></i>累计借款用户</p>
					<span>{{ all.lenderPeople }}</span>
				</li>
				<li class="applyCondition">
					<p><i></i>申请条件</p>
					<span v-html="all.applyCondition"></span>
				</li>
				<li class="auditMode">
					<p><i></i>审核方式</p>
					<span v-html="all.auditMarks"></span>
				</li>
				<li class="pay">
					<p><i></i>产品说明</p>
					<span>分期付款/一次性还清</span>
				</li>
			</ul>
		</div>
		<div class="applyFor">
			<a href="#">立即申请</a>
		</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      detailId: '',
	  all: ''
    }
  },
	methods: {
		returnBack() {
			window.history.back();
		}
	},
	created() {
		this.detailId = this.$route.params.id;
		// console.log(this.detailId);
		const sign1 = this.baseJs.getSign({
			appKey : "daikuan",
			format : "json",
			method : "qxf.lender.details",
			myParams : "{\"lenderId\":\"10891\",\"pkg\":\"bixuyouqian\"}",
			pkg : "qianqianqianqian",
			v : "1.0"
		});
		if(this.detailId == "10891"){
			this.baseJs.postReq(JSON.stringify({
				appKey : "daikuan",
				format : "json",
				method : "qxf.lender.details",
				myParams : "{\"lenderId\":\"10891\",\"pkg\":\"bixuyouqian\"}",
				pkg : "qianqianqianqian",
				sign : sign1,
				v : "1.0"
			})).then(res => {
				// console.log(res);
 				this.all = res.resultData;
				// console.log(this.all);
			}).catch(err => {
				console.log(err)
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/detail.css';
</style>
