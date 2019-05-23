<template>
  <div class="listing">
  	<ul>
  		<li v-for="(detail,index) in detailItem" :key="detail.id">
			<router-link :to="{name: 'detail',params:{id: detail.id}}">
				<div class='picture'>
					<div>
						<img :src="detailImg + detail.lenderLogo" alt=""/>
					</div>
				</div>
				<div class="intro" :class="{introYes:giveData}">
					<div class="message">
						<p class="zfb">{{ detail.lenderName }}</p>
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
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      aa: ''
	  
    }
  },
  props: [
	  "giveData",
	  "detailImg",
	  "detailItem"
  ],
  created() {
	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/list.css'
</style>
