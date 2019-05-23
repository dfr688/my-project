<template>
  <div class="Problem">
		<Top>常见问题</Top>
		<ul>
			<li @click="showText">
				<p><span></span>如何申请贷款？</p><i></i>
				<div v-show="isShow">
					你可以根据自己的需求和资质结合我们的罚款分类选择合适自己的产品，并根据此款贷款产品的要求填完资料并提交申请。
				</div>
			</li>
			<li>
				<p><span></span>如何申请贷款？</p><i></i>
				<div v-show="false">
					你可以根据自己的需求和资质结合我们的罚款分类选择合适自己的产品，并根据此款贷款产品的要求填完资料并提交申请。
				</div>
			</li>
			<li>
				<p><span></span>如何申请贷款？</p><i></i>
				<div v-show="false">
					你可以根据自己的需求和资质结合我们的罚款分类选择合适自己的产品，并根据此款贷款产品的要求填完资料并提交申请。
				</div>
			</li>
			<li>
				<p><span></span>如何申请贷款？</p><i></i>
				<div v-show="false">
					你可以根据自己的需求和资质结合我们的罚款分类选择合适自己的产品，并根据此款贷款产品的要求填完资料并提交申请。
				</div>
			</li>
			<li>
				<p><span></span>如何申请贷款？</p><i></i>
				<div v-show="false">
					你可以根据自己的需求和资质结合我们的罚款分类选择合适自己的产品，并根据此款贷款产品的要求填完资料并提交申请。
				</div>
			</li>
			<li>
				<p><span></span>如何申请贷款？</p><i></i>
				<div v-show="false">
					你可以根据自己的需求和资质结合我们的罚款分类选择合适自己的产品，并根据此款贷款产品的要求填完资料并提交申请。
				</div>
			</li>
		</ul>
  </div>
</template>

<script>
	import Top from './Top'
	
export default {
  name: '',
  data () {
    return {
      isShow: false
    }
  },
  components: {
	  Top
  },
	methods: {
		showText() {
			this.isShow =!this.isShow;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/problem.css';
</style>
