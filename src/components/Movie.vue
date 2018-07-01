<template>
  <div class="menu">
    <!-- <h1>{{ msg }}</h1> -->
    <DoubanResource/>
    <DoubanResource topx="10"/>
    <DoubanResource topx="20"/>
  </div>
</template>

<script>
import DoubanResource from '@/components/DoubanResource.vue'
export default {
  name: 'Movie',
  data () {
    return {
      msg: 'Welcome to Movie'
    }
  },
  components: {
    DoubanResource
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
