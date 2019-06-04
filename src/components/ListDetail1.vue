<template>
  <div class="listdetail1">
			<Top>{{ tit }}</Top>
			<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			  <ul>
			  	<li v-for="(detail,index) in detailItem" :key="detail.id">
			  		<router-link :to="{name: 'detail',params:{id: detail.id}}">
			  			<div class='picture'>
			  				<div>
			  					<img :src="imagePrefix + detail.lenderLogo" alt=""/>
			  				</div>
			  			</div>
			  			<div class="intro">
			  				<div class="message">
			  					<p class="zfb">{{ detail.lendername }}</p>
			  					<p class="date"><span>日利率：{{ detail.lenderRate }}</span></p>
			  					<p class="tips">{{ detail.lenderTip }}</p>
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
			  <div v-if="allLoaded" class="data-none">没有更多数据了</div>
			  <div slot="top" class="mint-loadmore-top" style="text-align:center">
				<span class="tips" v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">释放加载</span>
				<span class="tips" v-show="topStatus === 'loading'">加载中...</span>
              </div>
			</mt-loadmore>
  </div>
</template>

<script>
	import Top from './Top'
	import List from './List'
	import {getReq}  from '../api/index'
	
	const detailItem = [];
export default {
  name: '',
  data () {
    return {
      tit: "",
	  procuctId: "",
	  detailItem: detailItem,
	  page: 1,
	  allLoaded: false,
	  imagePrefix: "http://211.149.225.239:9992/resource/",
	  topStatus: ""
    }
  },
  components: {
		Top,
		List
	},
	methods: {
		getList(page) {
			this.tit = this.$route.params.labelName;
			this.procuctId = this.$route.params.id;
			// 发送请求
			this.baseJs.getReq("/api/Gtemore",{pkg:"xiaozhubaika5.8",newId:this.procuctId,pagesize:"10",page:page})
			.then(res => {
				// console.log(res);
				this.detailItem = res;
				// console.log(this.detailItem)
			})
			.catch(err => {
				console.log(err);
			});
		},
		loadBottom() {
			this.page = this.page + 1;
			// 发送请求
			this.baseJs.getReq("/api/Gtemore",{pkg:"xiaozhubaika5.8",newId:this.procuctId,pagesize:"10",page:this.page})
			.then(res => {
				// console.log(res);
				if(res.length == 0){
					this.allLoaded = true;
					this.$refs.loadmore.onBottomLoaded();
				}
				this.detailItem = this.detailItem.concat(res);
				// console.log(this.detailItem)
			})
			.catch(err => {
				console.log(err);
			});
		},
		loadTop() {
			this.handleTopChange("loading");//下拉时 改变状态码
			this.getList(1);
			this.allLoaded = false;
			this.page = 1;
			setTimeout(() => {
                    this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
                    this.$refs.loadmore.onTopLoaded();
                }, 800);
			// console.log(this.topStatus);
		},
		handleTopChange(status) {
            this.topStatus = status;
        },
	},
  created() {
		this.getList(1);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/listdetail1.css';
</style>
