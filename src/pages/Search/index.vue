<template>
  <div>
    我是搜索
    <h2>params参数：{{$route.params.keyword}}</h2>
    <h2>query参数：{{$route.query.k}}</h2>
    <h2>props数据：{{k}}==={{keyword}}</h2>
  </div>
</template>
<script>
export default {
  name:'MySearch',
  data(){
    return {
       
    }
  },
  props: ['k','keyword']
}
</script>
<style scoped lang='scss'>
</style>