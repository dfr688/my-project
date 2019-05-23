<template>
  <div class="ListDetail">
			<Top>{{ tit }}</Top>
			<list/>
  </div>
</template>

<script>
	import Top from './Top'
	import List from './List'

	
export default {
  name: '',
  data () {
    return {
      tit: "为你推荐"
    }
  },
	components: {
		Top,
		List
	},
	mounted() {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/listdetail.css';
</style>
