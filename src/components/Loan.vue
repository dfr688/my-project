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
	<ul>
	 	<li v-for="(detail,index) in detailItems" :key="detail.id">
	 		<router-link :to="{name: 'detail',params:{id: detail.id}}">
	 			<div class='picture'>
	 				<div>
	 					<img :src="imagePrefix + detail.lenderLogo" alt=""/>
	 				</div>
	 			</div>
	 			<div class="intro">
	 				<div class="message">
	 					<p class="zfb">{{ detail.title }}</p>
	 					<p class="date"><span>日利率：{{ detail.lenderRate }}</span></p>
	 					<p class="tips">{{ detail.lendertip }}</p>
	 				</div>
	 				<div class="apply">
	 					<p class="most">最高可借</p>
	 					<p class="money">￥ {{ detail.lenderMaxMoney }}</p>
	 					<router-link :to="{name: 'detail',params:{id: detail.id}}">立即申请</router-link>
	 				</div>
	 			</div>
	 		</router-link>
	 	</li>
	</ul>
  </div>
</template>

<script>
	import List from './List'
	import Top from './Top'
	import {getReq}  from '../api/index'
	
	const textFirsts = ["全部","1千以下","1千-5千","5千-1万","1万以上"];
	const textSeconds = ["全部","芝麻分","小额贷"];
	const textThrees = ["全部","0~0.005%","0.005%~0.01%","0.01%~0.05%","0.05%以上"];
	
	const detailItems = [];
export default {
	name: '',
	data () {
		return {
			isOne: false,
			isTwo: false,
			isThree: false,
			textOne: "额度",
			textTwo: "类型",
			textThree: "利率",
			textFirsts: textFirsts,
			textSeconds: textSeconds,
			textThrees: textThrees,
			detailItems: detailItems,
			item1: 0,
			item2: 0,
			item3: 0,
			imagePrefix: "http://211.149.225.239:9992/resource/"
		}
	},
	components: {
		List,
		Top
	},
	methods: {
// 		toSearch() {
// 			this.$router.push({name: "search"});
// 		},
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
			this.item1 = index;
			// 发送请求
			this.baseJs.getReq("/api/SelectCondition",{para1:this.item1,para2:this.item2,para3:this.item3,pkg:"xiaozhubaika5.8"})
			.then(res => {
				// console.log(res);
				this.detailItems = res;
			})
			.catch(err => {
				console.log(err);
			});
		},
		// 点击类型
		showTwo() {
			this.isTwo =!this.isTwo;
			this.isOne = false;
			this.isThree = false;
		},
		chooseItem1(index) {
			this.textTwo = textSeconds[index];
			this.isTwo = false;
			this.item2 = index;
			// 发送请求
			this.baseJs.getReq("/api/SelectCondition",{para1:this.item1,para2:this.item2,para3:this.item3,pkg:"xiaozhubaika5.8"})
			.then(res => {
				// console.log(res);
				this.detailItems = res;
			})
			.catch(err => {
				console.log(err);
			});
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
			this.item3 = index;
			// 发送请求
			this.baseJs.getReq("/api/SelectCondition",{para1:this.item1,para2:this.item2,para3:this.item3,pkg:"xiaozhubaika5.8"})
			.then(res => {
				// console.log(res);
				this.detailItems = res;
			})
			.catch(err => {
				console.log(err);
			});
		},
		// 点击返回
		returnGo() {
			window.history.back();
		}
		
	},
	created() {
		this.baseJs.getReq("/api/SelectCondition",{para1:0,para2:0,para3:0,pkg:"xiaozhubaika5.8"})
		.then(res => {
			// console.log(res);
			this.detailItems = res;
			// console.log(this.detailItems);
		})
		.catch(err => {
			console.log(err);
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/loan.css';
</style>
