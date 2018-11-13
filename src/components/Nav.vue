<template>
  <div id="nav">
    <div class="navbar">
      <div class="home" @click="toPage('/home')">
        <div class="item-icon home-icon"></div>
        <div class="item-txt" v-longtouch="test">首页</div>
      </div>
      <div class="scene" @click="toPage('/scene')">
        <div class="item-icon scene-icon"></div>
        <div class="item-txt">场景</div>
      </div>
      <div class="voice">
        <div class="voice-icon"></div>
        <div class="half-radius"></div>
        <div class="voice-txt">语音</div>
      </div>
      <div class="equip" @click="toPage('/equipment')">
        <div class="item-icon equip-icon"></div>
        <div class="item-txt">设备</div>
      </div>
      <div class="further" @click="toPage('/further')">
        <div class="item-icon further-icon"></div>
        <div class="item-txt">更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      show: false
    }
  },
  methods: {
    test() {
      console.log(233333)
    },
    toPage(url) {
      this.$router.push({
        path: url
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/nav.scss';
</style>


