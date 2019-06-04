<template>
  <div id="app">
	  <keep-alive>
		  <router-view></router-view>
	  </keep-alive>
		<Tabbar v-show="isShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'

export default {
  name: 'App',
	data() {
		return{
			isShow: true
		}
	},
  components: {
    Tabbar
  },
	watch: {
		$route(to,from){
			// console.log(to);
			// console.log(from);
			// 判断是否显示Tabbar
			if(to.name == 'home' || to.name == 'loan' || to.name == 'commend' || to.name == 'my'){
				this.isShow = true;
			}else{
				this.isShow = false;
			}
		}
	}
}
</script>

<style scoped>
	
</style>
