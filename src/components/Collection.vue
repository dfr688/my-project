<template>
  <div class="Collection">
   <Top :collectionTit="tit"></Top>
	 <List/>
  </div>
</template>

<script>
	import List from './List'
	import Top from './Top'
	
export default {
  name: '',
  data () {
    return {
      tit: "我的收藏"
    }
  },
	components: {
		List,
		Top
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/collection.css';
</style>
