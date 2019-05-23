<template>
  <div class="tabbar">
		<!-- <mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="home">
				<img slot="icon" src="../assets/images/pg_normal01.png" v-show='!(selected == "home")'>
				<img slot="icon" src="../assets/images/pg_press01.png" v-show='(selected == "home")'>
				首页
			</mt-tab-item>
			<mt-tab-item id="loan">
				<img slot="icon" src="../assets/images/pg_normal02.png" v-show='!(selected == "loan")'>
				<img slot="icon" src="../assets/images/pg_press02.png" v-show='(selected == "loan")'>
				贷款大全
			</mt-tab-item>
			<mt-tab-item id="commend">
				<img slot="icon" src="../assets/images/pg_normal03.png" v-show='!(selected == "commend")'>
				<img slot="icon" src="../assets/images/pg_press03.png" v-show='(selected == "commend")'>
				今日推荐
			</mt-tab-item>
			<mt-tab-item id="my">
				<img slot="icon" src="../assets/images/pg_normal04.png" v-show='!(selected == "my")'>
				<img slot="icon" src="../assets/images/pg_press04.png" v-show='(selected == "my")'>
				我的
			</mt-tab-item>
		</mt-tabbar> -->
		<ul>
			<li v-for="(img,index) in imgs" :key="index">
				<router-link :to="img.router">
					<img :src="img.src1" alt="" v-show="img.isSee"/>
					<img :src="img.src2" alt="" v-show="img.isShow"/>
					<p>{{ img.title }}</p>
				</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
	const imgs = [
		{
			src1: require("../assets/images/pg_normal01.png"),
			src2: require("../assets/images/pg_press01.png"),
			title: "首页",
			router: {name:"home"},
			isSee: true,
			isShow: false
		},
		{
			src1: require("../assets/images/pg_normal02.png"),
			src2: require("../assets/images/pg_press02.png"),
			title: "贷款大全",
			router: {name:"loan"},
			isSee: true,
			isShow: false
		},
		{
			src1: require("../assets/images/pg_normal03.png"),
			src2: require("../assets/images/pg_press03.png"),
			title: "今日推荐",
			router: {name:"commend"},
			isSee: true,
			isShow: false
		},
		{
			src1: require("../assets/images/pg_normal04.png"),
			src2: require("../assets/images/pg_press04.png"),
			title: "我的",
			router: {name:"my"},
			isSee: true,
			isShow: false
		}
	]
	let website = window.location.href;
export default {
	
	
  name: 'Tabbar',
  data () {
    return {
      // selected: 'home'
	  imgs: imgs,
	  website: website
    }
  },
//  	watch: {
//  		selected: function(newV,oldV){
// 			this.$router.push({name:this.selected});
//  		}
//  	}
 	watch: {
 		$route(to,from){
 			// console.log(to);
 			// console.log(from);
 			if(to.name == "home"){
				this.imgs.forEach(item=>{
				item.isSee = true;
				item.isShow = false;
				});
				this.imgs[0].isSee = false;
				this.imgs[0].isShow = true;
 			}else if(to.name == "loan"){
				this.imgs.forEach(item=>{
					item.isSee = true;
					item.isShow = false;
				});
				this.imgs[1].isSee = false;
				this.imgs[1].isShow = true;
			}else if(to.name == "commend"){
				this.imgs.forEach(item=>{
					item.isSee = true;
					item.isShow = false;
				});
				this.imgs[2].isSee = false;
				this.imgs[2].isShow = true;
			}else{
				this.imgs.forEach(item=>{
					item.isSee = true;
					item.isShow = false;
				});
				this.imgs[3].isSee = false;
				this.imgs[3].isShow = true;
			}
 		}
 	},
	mounted() {
		this.imgs[0].isSee = false;
		this.imgs[0].isShow = true;
		let cutWebsite = this.website.slice(26);
		// console.log(cutWebsite);
		if(cutWebsite == 'home'){
			this.imgs[0].isSee = false;
			this.imgs[0].isShow = true;
		}else if(cutWebsite == 'loan'){
			this.imgs[0].isSee = true;
			this.imgs[0].isShow = false;
			this.imgs[1].isSee = false;
			this.imgs[1].isShow = true;
		}
		else if(cutWebsite == 'commend'){
			this.imgs[0].isSee = true;
			this.imgs[0].isShow = false;
			this.imgs[2].isSee = false;
			this.imgs[2].isShow = true;
		}else if(cutWebsite == 'my'){
			this.imgs[0].isSee = true;
			this.imgs[0].isShow = false;
			this.imgs[3].isSee = false;
			this.imgs[3].isShow = true;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tabbar ul{
		display: flex;
		width: 100%;
		background-color: #fff;
		box-shadow: 0px 4px 22px 2px rgba(58, 58, 58, 0.15);
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.tabbar ul li{
		flex: 1;
		text-align: center;
		font-size: .3rem;
		padding: .2rem;
	}
	.tabbar ul li a img{
		width: .38rem;
		height: .4rem;
	}
	.tabbar ul li a p{
		font-size: .24rem;
		color: #999;
	}
</style>
