<template>
  <div class="ListDetail">
			<Top>{{ tit }}</Top>
			<list :detailImg="imgIp" :detailItem="itemLists"/>
  </div>
</template>

<script>
	import Top from './Top'
	import List from './List'
	import {getSign} from '../api/index'
	import {postReq} from '../api/index'
	
	const itemLists = [];
	
export default {
  name: '',
  data () {
    return {
      tit: "",
			goodsId: '',
			imgIp: '',
			itemLists : itemLists
    }
  },
	components: {
		Top,
		List
	},
	created() {
		this.tit = this.$route.params.subject;
		this.goodsId = this.$route.params.goodsId;
		// console.log(this.goodsId);
		// console.log(this.$route.params.subject);
		// 在线审核
		const sign1 = this.baseJs.getSign({
			appKey : "daikuan",
			format : "json",
			method : "qxf.lender.list",
			myParams : "{\"labelId\":\"141\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
			pkg : "qianqianqianqian",
			v : "1.0"
		});
		// 信用卡贷款
		const sign2 = this.baseJs.getSign({
			appKey : "daikuan",
			format : "json",
			method : "qxf.lender.list",
			myParams : "{\"labelId\":\"3\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
			pkg : "qianqianqianqian",
			v : "1.0"
		});
		// 无视黑白
		const sign3 = this.baseJs.getSign({
			appKey : "daikuan",
			format : "json",
			method : "qxf.lender.list",
			myParams : "{\"labelId\":\"6\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
			pkg : "qianqianqianqian",
			v : "1.0"
		});
		// 芝麻分贷
		const sign4 = this.baseJs.getSign({
			appKey : "daikuan",
			format : "json",
			method : "qxf.lender.list",
			myParams : "{\"labelId\":\"151\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
			pkg : "qianqianqianqian",
			v : "1.0"
		});
		// 在线审核 发送请求
		if(this.goodsId == "141"){
			this.baseJs.postReq(JSON.stringify({
				appKey : "daikuan",
				format : "json",
				method : "qxf.lender.list",
				myParams : "{\"labelId\":\"141\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
				pkg : "qianqianqianqian",
				sign : sign1,
				v : "1.0"
			})).then(res => {
				// console.log(res);
				this.imgIp = res.resultData.imagePrefix;
				this.itemLists = res.resultData.items;
				// console.log(this.itemLists);
			}).catch(err => {
				console.log(err)
			});//信用卡贷款 发送请求
		}else if(this.goodsId == "3"){
			this.baseJs.postReq(JSON.stringify({
				appKey : "daikuan",
				format : "json",
				method : "qxf.lender.list",
				myParams : "{\"labelId\":\"3\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
				pkg : "qianqianqianqian",
				sign : sign2,
				v : "1.0"
			})).then(res => {
				// console.log(res);
				this.imgIp = res.resultData.imagePrefix;
				this.itemLists = res.resultData.items;
			}).catch(err => {
				console.log(err)
			});// 无视黑白 发送请求
		}else if(this.goodsId == "6"){
			this.baseJs.postReq(JSON.stringify({
				appKey : "daikuan",
				format : "json",
				method : "qxf.lender.list",
				myParams : "{\"labelId\":\"6\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
				pkg : "qianqianqianqian",
				sign : sign3,
				v : "1.0"
			})).then(res => {
				// console.log(res);
				this.imgIp = res.resultData.imagePrefix;
				this.itemLists = res.resultData.items;
			}).catch(err => {
				console.log(err)
			});//芝麻分贷 发送请求
		}else{
			this.baseJs.postReq(JSON.stringify({
				appKey : "daikuan",
				format : "json",
				method : "qxf.lender.list",
				myParams : "{\"labelId\":\"151\",\"pkg\":\"xiaozhubaika5.8\",\"page\":\"1\"}",
				pkg : "qianqianqianqian",
				sign : sign4,
				v : "1.0"
			})).then(res => {
				// console.log(res);
				this.imgIp = res.resultData.imagePrefix;
				this.itemLists = res.resultData.items;
			}).catch(err => {
				console.log(err)
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/listdetail.css';
</style>
