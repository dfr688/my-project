<template>
  <div class="home">
		<div class="top">
				<!-- 背景图片 -->
				<div class="img">
					<div>
						<router-link to="/detail">
							<img src="../assets/images/list_03.png" alt=""/>
							<p>借贷宝</p>
						</router-link>
					</div>
				</div>
				<!-- 列表导航 -->
				<div class="list">
					<ul>
						<li v-for='(list,index) in lists' :key='index'>
							<router-link :to="{name:'listdetail',params:{subject:list.labelName,goodsId:list.id}}">
								<img :src="imagePrefix + list.labelIcon" alt=""/>
								<p>{{ list.labelName }}</p>
							</router-link>
						</li>
					</ul>
				</div>
				<!-- 快讯 -->
				<div class="swiper-container">
					<span>快讯</span>
					<div class="swiper-wrapper">
							<div class="swiper-slide" v-for='(info,index) in infos' :key='index'>{{ info }}</div>
					</div>
				</div>
		</div>
		<!-- 列表 为你推荐 -->
		<div class="recommend">
			<div class="headTop clearfix">
				<div class="headInfo fl">
					<span class='line'></span>
						<p class="tit">为你推荐</p>
						<p class="mes">
							<span class="fea" v-for='(feature,index) in features' :key='index'>{{ feature.f1 }}</span>
						</p>
				</div>
				<div class="more fr">
					<router-link to="/listdetail1">更多</router-link>
				</div>
			</div>
			<List></List>
		</div>
		<div class="recommend">
			<div class="headTop clearfix">
				<div class="headInfo fl">
					<span class='line'></span>
						<p class="tit">为你推荐</p>
						<p class="mes">
							<span class="fea" v-for='(feature,index) in features' :key='index'>{{ feature.f1 }}</span>
						</p>
				</div>
				<div class="more fr">
					<router-link to="/listdetail1">更多</router-link>
				</div>
			</div>
			<List></List>
		</div>
		<div class="recommend">
			<div class="headTop clearfix">
				<div class="headInfo fl">
					<span class='line'></span>
						<p class="tit">为你推荐</p>
						<p class="mes">
							<span class="fea" v-for='(feature,index) in features' :key='index'>{{ feature.f1 }}</span>
						</p>
				</div>
				<div class="more fr">
					<router-link to="/listdetail1">更多</router-link>
				</div>
			</div>
			<List></List>
		</div>
		<!-- 猜你喜欢 -->
		<div class="loves">
			<div class="title">
				<div></div>
				<span>猜你喜欢</span>
				<div></div>
			</div>
			<div class="slot">
				<ul class="clearfix">
					<li>
						<a href="#">
							<img src="../assets/images/list_03.png" alt="">
							<p>借贷宝</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/list_03.png" alt="">
							<p>有钱花</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/list_03.png" alt="">
							<p>爱钱进</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/list_03.png" alt="">
							<p>小米金融</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/list_03.png" alt="">
							<p>百度钱包</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/list_03.png" alt="">
							<p>百度钱包</p>
						</a>
					</li>
				</ul>
			</div>
			<p class="clickMore"><a href="#">点我查看更多借贷产品 ></a></p>
		</div>
		<!-- 弹框 -->
		<mt-popup
			v-model="popupVisible"
			popup-transition="popup-fade">
				<div class="popupImg">
					<img @click="goto('/loan')" src="../assets/images/popup.png" alt=""/>
					<div class="close" @click="closePopup"></div>
				</div>
		</mt-popup>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import List from './List'
	import {getSign} from '../api/index'
	import {postReq} from '../api/index'
	
	
	const lists = [];
	const infos = [];
	const features = [
		{ f1: '易通过' },
		{ f1: '利息低' },
		{ f1: '放款快' }
	]
	
	
export default {
  name: '',
  data () {
    return {
	  infos: infos,
      lists: lists,
	  imagePrefix: '',
	  features: features,
	  popupVisible: false
    }
  },
  components: {
	  List
  },
  methods:{
	useSwiper(){
		//初始化swiper
			const mySwiper = new Swiper ('.swiper-container', {
			direction: 'vertical', // 垂直切换选项
			loop: true, // 循环模式选项
			autoplay: true,
			initialSlide :0,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
		})        
	},
	closePopup() {
		this.popupVisible = false;
	},
	goto(path) {
		this.$router.push(path);
	}
},
created() {
	// 首页通知公告
	// 先获取sign值
	const sign1 = this.baseJs.getSign({
		appKey : "daikuan",
		format : "json",
		method : "qxf.system.notice",
		myParams : "{\"pkg\":\"51JKY\"}",
		pkg : "qianqianqianqian",
		v : "1.0"
	});
	// console.log(sign1);
	// 发送axios请求 
	this.baseJs.postReq(JSON.stringify({
		appKey : "daikuan",
		format : "json",
		method : "qxf.system.notice",
		myParams : "{\"pkg\":\"51JKY\"}",
		pkg : "qianqianqianqian",
		sign : sign1,
		v : "1.0"
	})).then(res => {
		// console.log(res);
		this.infos = res.notice;
		// console.log(this.infos);
	}).catch(err => {
		console.log(err);
	});
	// 首页列表导航
	const sign2 = this.baseJs.getSign({
		appKey : "daikuan",
		format : "json",
		method : "qxf.lender.label.list",
		myParams : "{\"pageSize\":8,\"pkg\":\"xiaozhubaika5.8\",\"page\":1}",
		pkg : "qianqianqianqian",
		v : "1.0"
	});
	this.baseJs.postReq(JSON.stringify({
		appKey : "daikuan",
		format : "json",
		method : "qxf.lender.label.list",
		myParams : "{\"pageSize\":8,\"pkg\":\"xiaozhubaika5.8\",\"page\":1}",
		pkg : "qianqianqianqian",
		sign : sign2,
		v : "1.0"
	})).then(res => {
		// console.log(res);
		this.lists = res.items;
		this.imagePrefix = res.imagePrefix;
		// console.log(this.imagePrefix);
		// console.log(this.lists);
	}).catch(err => {
		console.log(err)
	});
},
mounted() {
	this.useSwiper();
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/home.css';
	@import '../../node_modules/swiper/dist/css/swiper.css'
</style>
