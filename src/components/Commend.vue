<template>
  <div class="commend">
		<!-- 今日推荐 -->
		<div class="title"></div>
		<ul>
			<li v-for="(item,index) in arr" :key="item.id">
				<router-link :to="{name: 'detail',params:{id:item.id}}">
					<div class="introduce">
						<p class="wallet">{{ item.title }}</p>
							<div class="include">
								<div class="first">
									<p>最高借款(元)</p>
									<span class="num">5万</span>
								</div>
								<div class="second">
									<p>日利率(日)</p>
									<span>0.01%</span>
								</div>
							</div>
					</div>
					<div class="applyNow">
						<a href="javascript:void(0);">立即申请</a>
					</div>
					<div class="sign">
						<img :src="imagePrefix + item.lenderLogo" alt="">
					</div>
				</router-link>
			</li>
		</ul>
		<div class="change">
			<a href="javascript:void(0)" @click="changeAnother">换一批</a>
		</div>
  </div>
</template>

<script>
	import {getReq}  from '../api/index'
	 const arr = [];
	 const cutArr =[];
	
export default {
  name: '',
  data () {
    return {
      arr: arr,
	  cutArr: cutArr,
	  imagePrefix: "http://211.149.225.239:9992/resource/"
    }
  },
  methods: {
	  changeAnother() {
		  this.baseJs.getReq("/api/switchFour",{pkg:"xiaozhubaika5.8"})
		  	 .then(res => {
		  		 // 随机打乱返回的数据
		   		 res = res.sort(() => {
		   			 return 0.5 - Math.random();
		   		 })
		   		 this.arr = res;
		   		 this.cutArr = this.arr.slice(0,4);
		  		  // console.log(this.cutArr);
		  	 })
		  	 .catch(err => {
		  		 console.log(err);
		  	 });
	  }
  },
  created() {
	 this.baseJs.getReq("/api/switchFour",{pkg:"xiaozhubaika5.8"})
	 .then(res => {
		 // console.log(res);
		 this.arr = res.slice(0,4);
		 // console.log(this.arr);
	 })
	 .catch(err => {
		 console.log(err);
	 });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/commend.css';
</style>
