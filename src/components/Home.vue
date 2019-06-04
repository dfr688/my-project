<template>
  <div class="home">
		<div class="top">
				<!-- 背景图片 -->
				<div class="img">
					<div class="wrap">
						<div>
							<router-link :to="{name:'detail',params:{id:bannerProduct.id}}">
								<img :src="imagePre + bannerProduct.lenderLogo" alt=""/>
								<p>{{ bannerProduct.title }}</p>
							</router-link>
						</div>
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
		<div class="recommend" v-for="(typeList,index) in typeLists" :key="typeList.id">
			<div class="headTop clearfix">
				<div class="headInfo fl">
					<span class='line'></span>
						<p class="tit">{{ typeList.lableName }}</p>
						<p class="mes">
							<span class="fea" v-for='(feature,index) in features' :key='index'>{{ feature.f1 }}</span>
						</p>
				</div>
				<div class="more fr">
					<router-link :to="{name:'listdetail1',params:{labelName:typeList.lableName,id:typeList.id}}">更多</router-link>
				</div>
			</div>
			<ul>
				<li v-for="( item,index) in typeList.items" :key="item.id">
					<router-link :to="{name: 'detail',params:{id: item.id}}">
						<div class='picture'>
							<div>
								<img :src="imagePrefix + item.lenderLogo" alt=""/>
							</div>
						</div>
						<div class="intro">
							<div class="message">
								<p class="zfb">{{ item.lendername }}</p>
								<p class="date"><span>日利率：{{ item.lenderRate }}</span></p>
								<p class="tips">{{ item.lenderTip }}</p>
							</div>
							<div class="apply">
								<p class="most">最高可借</p>
								<p class="money">￥ {{ item.lenderMaxMoney }}</p>
								<router-link :to="{name: 'detail',params:{id: item.id}}">立即申请</router-link>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
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
	import {getReq}  from '../api/index'
	
	
	const lists = [];
	const infos = [];
	const features = [
		{ f1: '易通过' },
		{ f1: '利息低' },
		{ f1: '放款快' }
	]
	const typeLists = [];
	const bannerProduct = [];
export default {
  name: '',
  data () {
    return {
	  bannerProduct: bannerProduct,
	  infos: infos,
    lists: lists,
	  imagePrefix: '',
	  features: features,
	  typeLists: typeLists,
	  popupVisible: "",
	  imagePre: "http://211.149.225.239:9992/resource/"
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
	// 第一次打开首页显示广告图 刷新首页页面和回退到首页时候都不会再出现 只有在重新打开app的时候才会弹出广告层 可以用sessionStorage
	let value = null;
	value = sessionStorage.getItem("firstLogin");
	if(value == null){
		this.popupVisible = true;
		sessionStorage.setItem("firstLogin",true);
	}else{
		this.popupVisible = false;
	}
	
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
		this.infos = res.resultData.notice;
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
		this.lists = res.resultData.items;
		this.imagePrefix = res.resultData.imagePrefix;
		//console.log(this.imagePrefix);
		// console.log(this.lists);
	}).catch(err => {
		console.log(err)
	});
	// get 请求 列表分类
	this.baseJs.getReq("/api/newLabel",{pkg:'xiaozhubaika5.8'}).then(res => {
		// console.log(res);
		this.typeLists = res;
		// console.log(this.typeLists);
	})
	.catch(err => {
		console.log(err);
	});
// 	// banner图中的产品
 	this.baseJs.getReq("/api/switchOne",{pkg:"xiaozhubaika5.8"}).then(res => {
 		// console.log(res[0]);
 		this.bannerProduct = res[0];
 		// console.log(this.bannerProduct);
 	})
 	.catch(err => {
 		console.log(err);
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
