<template>
  <div id="app">
    <div id="menuList">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="menu">Menu</router-link></li>
        <li><router-link to="movie">Movie</router-link></li>
      </ul>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
  border: 0;
  margin: 0;
}
#menuList{
  background-color: #333;
}
#menuList ul{
  display: inline-block;
}
#menuList ul li{
  list-style-type: none;
  display: inline-block;
}
#menuList li a{
  color: white;
  padding: 20px;
}
</style>
