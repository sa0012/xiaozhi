<template>
  <div id="app">
    <!--<navbar></navbar>-->
    <div id="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script>

import Navbar from '@/components/Header';
import BottomNavbar from '@/components/Nav';

export default {
  name: 'app',
  data() {
    return {
      hostname: window.location.hostname
    };
  },
  mounted() {
    console.log(window.location.hostname)
  },
  components: {
    Navbar,
    BottomNavbar
  }
};
</script>

<style lang="sass">
@import "./assets/style/reset.scss";
@import "./assets/style/mint.scss";
@import "./assets/font/iconfont.css";
</style>

