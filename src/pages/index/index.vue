<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div style="width:400px;height:600px;background-color:rgba(255,44,44,.4);display:flex;flex-direction: column">
    <label>自动生成多页面框架page1---->>></label>
    <a href="/page2.html" style="margin-top:40px;">跳转到page2页面</a>
    <a href="/page3.html" style="margin-top:40px;">跳转到page3页面</a>
    <a href="/page4.html" style="margin-top:40px;">跳转到page4页面</a>
    <!-- <a href="/stockpage.html" style="margin-top:40px;">跳转到stockpage页面</a> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  // name: 'App',
  name: 'index',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
