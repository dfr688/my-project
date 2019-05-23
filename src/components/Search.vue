<template>
  <div class="Search">
		<div class="wrap">
			<div class="search">
				<span class="back" @click="goReturn"></span><input type="text" placeholder="搜索借款产品" v-model="text" @keyup.13="setHistory"/><span class="loupe"></span><span class="cancel">取消</span>
			</div>
		</div>
		<!-- 热门搜索 -->
		<div class="hotSearch">
			<p>热门搜索</p>
			<ul>
				<li>
					sdgh
				</li>
				<li>
					51借贷
				</li>
				<li>
					51借贷
				</li>
				<li>
					51借贷
				</li>
				<li>
					马上金融
				</li>
				<li>
					你我贷
				</li>
				<li>
					你我贷
				</li>
				<li>
					你我贷
				</li>
			</ul>
		</div>
		<!-- 搜索历史 -->
		<div class="history">
			<div class="historyTit">
				<p>搜索历史</p>
				<div @click="deletAll">
					<i></i>删除全部
				</div>
			</div>
			<ul>
				<li v-for="(searchWord,index) in searchWords" :key="index">
					<p>{{ searchWord }}</p>
					<div @click="deletOne(index)">
						<i></i>
					</div>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
	
	
export default {
  name: '',
  data () {
    return {
      searchWords: [],
	  text: ''
    }
  },
  methods: {
	  goReturn() {
		  window.history.back();
	  },
	  setHistory() {
		  // alert(this.text);
		  // 判断输入的不为空
		  if(this.text !==''){
			  // 先判断是否重复，如果不重复，就直接在最前面添加，如果存在，就不管了，
			  // 判断是否超过缓存个数，如果超过，酒吧最后一个去掉
			  let cache = localStorage.getItem("word");
			  //先取缓存，如果缓存不存在，就直接添加，如果存在缓存，
			  if(cache !== null) {
				  // 先判断是否重复，如果不重复，就直接在最前面添加，如果存在，就不管了，
				  if(cache.indexOf(this.text) == -1) {
					 let arr = cache.split(",");
					 arr.unshift(this.text);
					 if(arr.length > 6){
						 arr.pop();
					 }
					 this.searchWords = arr;
					arr = arr.join(",");
					localStorage.setItem("word",arr);
				  }
			  }else{
				  localStorage.setItem("word",this.text);
				  this.searchWords = [this.text];
			  }
		  }
	  },
	  deletAll() {
		  localStorage.removeItem("word");
		  this.searchWords = "";
	  },
	  deletOne(index) {
		 this.searchWords.splice(index,1);
		 if(this.searchWords.length !== 0){
			newCache = this.searchWords.join(",");
			localStorage.setItem("word",newCache);
		 }else{
			 localStorage.removeItem("word");
		 }
	  }
  },
  created() {
	  // 读取缓存
	  this.searchWords = localStorage.getItem("word");
	  // 判读是否已经存在缓存
	  // console.log(this.searchWords);
	  if(this.searchWords !== null){
	  this.searchWords = this.searchWords.split(",");
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/search.css';
</style>
