<template>
  <div class="Loan">
   <!-- 搜索与筛选 -->
   <div class="choose">
		 <div class="contain">
			 <!-- <div class="search">
				 <span @click="returnGo" class="back"></span><input type="text" placeholder="搜索借款产品" @click="toSearch" readonly/><span class="loupe"></span>
			 </div> -->
			 <Top>贷款大全</Top>
			 <div class="screen">
				 <ul class="wrap">
					 <li class="one">
						<input type="text" v-model="textOne" readonly @click="showOne" onfocus="this.blur()"/><i></i>
						 <div v-show="isOne">
							 <ul>
								 <li v-for="(textFirst,index) in textFirsts" :key="index" @click="chooseItem0(index)">
								 	{{ textFirst }} 
								 </li>
							 </ul>
						 </div>
					 </li>
					  <li class="two">
						 <input type="text" v-model="textTwo" readonly @click="showTwo" onfocus="this.blur()"/><i></i>
						 <div v-show="isTwo">
							 <ul>
								 <li v-for="(textSecond,index) in textSeconds" :key="index" @click="chooseItem1(index)">
								 	{{ textSecond }} 
								 </li>
							 </ul>
						 </div>
					</li>
					  <li class="three">
						 <input type="text" v-model="textThree" readonly @click="showThree" onfocus="this.blur()"/><i></i>
						 <div v-show="isThree">
							 <ul>
								 <li v-for="(textThree,index) in textThrees" :key="index" @click="chooseItem2(index)">
									{{ textThree }} 
								 </li>
							 </ul>
						 </div>
					 </li>
				 </ul>
			 </div>
		 </div>
	</div>
	 <!-- 列表 -->
	 <List :giveData="isShow"></List>
  </div>
</template>

<script>
	import List from './List'
	import Top from './Top'
	
	const textFirsts = ["全部","1千以下","1千-5千","5千-1万","2万以上"]
	const textSeconds = ["全部","0.0003%","0.03%"]
	const textThrees = ["全部","1-3个月","3-9个月"," 9-12个月","更长时间"]
export default {
	name: '',
	data () {
		return {
			isShow: true,
			isOne: false,
			isTwo: false,
			isThree: false,
			textOne: "额度",
			textTwo: "利率",
			textThree: "期限",
			textFirsts: textFirsts,
			textSeconds: textSeconds,
			textThrees: textThrees
		}
	},
	components: {
		List,
		Top
	},
	methods: {
		toSearch() {
			this.$router.push({name: "search"});
		},
		// 点击额度
		showOne() {
			this.isOne =!this.isOne;
			this.isTwo = false;
			this.isThree = false;
		},
		chooseItem0(index) {
			// console.log(index);
			this.textOne = textFirsts[index];
			this.isOne = false;
		},
		// 点击利率
		showTwo() {
			this.isTwo =!this.isTwo;
			this.isOne = false;
			this.isThree = false;
		},
		chooseItem1(index) {
			this.textTwo = textSeconds[index];
			this.isTwo = false;
		},
		// 点击期限
		showThree() {
			this.isThree =!this.isThree;
			this.isOne = false;
			this.isTwo = false;
		},
		chooseItem2(index) {
			this.textThree = textThrees[index];
			this.isThree = false;
		},
		// 点击返回
		returnGo() {
			window.history.back();
		}
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/loan.css';
</style>
