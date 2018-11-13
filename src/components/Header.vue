<template>
  <div id="header">
    <div class="header-wrap border_bottom">
      <div class="header-left">
        <div class="arrow-wrap" @click="goBack"  v-if="showArrowLeft">
          <img class="back" src="../assets/images/home/back.png" alt="" >
        </div>
        <slot name="header-left"></slot>
      </div>
      <div v-if="showTitle" class="header-title">
        {{ $route.meta.title }}
      </div>
      <div class="header-right">
        <slot name="header-right"></slot>
        <p v-if="showNext" class="next">下一步</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    showArrowLeft: {
      type: Boolean,
      default: true
    },
    showNext: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/header/index.scss';
</style>

