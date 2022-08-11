<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: { Header,Footer },
  // eslint-disable-next-line vue/multi-word-component-names
  name:'',
  data(){
    return {
       
    }
  }
}
</script>
<style scoped lang='less'>
</style>