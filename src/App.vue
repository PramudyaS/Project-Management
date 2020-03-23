<template>
  <v-app> 
    <Navbar/> 
      <div class="container-fluid">
        <div class="columns">
          <div class="column is-one-quarter">
            <Sidebar icon="expanded"/>
          </div>
          <div class="column content">
            <router-view/>
          </div>
        </div>
      </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/master/Navbar';
import Sidebar from '@/components/master/Sidebar';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
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
.content{
  background-color:#f1f3f4;
  margin-top:20
}
.row-content{
  background-color:white;
}
</style>
