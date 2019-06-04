<template>
  <div class="my">
		<Top>我的</Top>
		<div class="headPortrait">
			<div class="image">
				<!-- 图片地址动态绑定 -->
				<img src="../assets/images/head_02.png" alt="">
			</div>
			<!-- <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/> -->
			<div class="personalInfo" v-show="showUp">
				<!-- <p class="name">张三</p> -->
				<p class="phone"><span></span>{{ this.mobile }}</p>
			</div>
			<div class="clickLogin" v-show="!showUp">
				<router-link to="/login">请点击登录</router-link>
			</div>
		</div>
		<!-- <div class="means">
			<ul>
				<li class="personalIntro">
					<router-link to="/info">
						<span></span>
						<p>个人信息</p>
					</router-link>
				</li>
				<li class="creditIntro">
					<router-link to="/credit">
						<span></span>
						<p>信用资料</p>
					</router-link>
				</li>
			</ul>
		</div> -->
		<div class="sort">
			<ul>
			<!-- 	<li>
					<router-link to="/collection" class="clearfix">
						<span class="fl">我的收藏</span><i class=" fr iconOne"></i>
					</router-link>
				</li> -->
				<li>
					<router-link to="/problem" class="clearfix">
						<span class="fl">常见问题</span><i class=" fr iconTwo"></i>
					</router-link>
				</li>
				<li>
					<router-link to="/suggest" class="clearfix">
						<span class="fl">意见反馈</span><i class="fr iconThree"></i>
					</router-link>
				</li>
				<li>
					<router-link to="/about" class="clearfix">
						<span class="fl">关于我们</span><i class="fr iconFour"></i>
					</router-link>
				</li>
				<li>
					<router-link to="/set" class="clearfix">
						<span class="fl">设置</span><i class=" fr iconFive"></i>
					</router-link>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
	import Top from './Top'
	
export default {
  name: '',
  data () {
    return {
      showUp: false,
// 	  userInfo: {
// 	    avatar: require('../assets/images/head_02.png')
// 	  },
	  mobile:''
    }
  },
  components: {
	  Top
  },
  methods: {
    // 打开图片上传
//     uploadHeadImg: function () {
//       this.$el.querySelector('.hiddenInput').click()
//     },
    // 将头像显示
//     handleFile: function (e) {
//       let $target = e.target || e.srcElement
//       let file = $target.files[0]
//       var reader = new FileReader()
//       reader.onload = (data) => {
//         let res = data.target || data.srcElement
//         this.userInfo.avatar = res.result
//       }
//       reader.readAsDataURL(file)
//     }
  },
  created() {
	  this.mobile = localStorage.getItem("mobile");
	  if(this.mobile != null){
		  this.showUp = true;
	  }else{
		  this.showUp = false;
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/my.css';
</style>
