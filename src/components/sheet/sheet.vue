<template>
  <div class="sheet" v-show="visible">
    <div class="modal" v-show="visible" @click="showModal"></div>
    <ul class="sheet-list bounceInDown" v-if="sheetList">
      <li class="sheet-item border_bottom" v-for="(item, index) in sheetList" :key="index">
        <div @click="item.callback" v-if="item.callback">{{ item.title }}</div>
        <div v-else>{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    sheetList: {
      type: Array
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showModal() {
      this.visible = false;
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2222;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .sheet-list {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 3333;
    animation: fadeInUp 0.5s ease;
    .sheet-item {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      letter-spacing: 1px;
      color: #1FB2FF;
    }
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
  }
}
</style>
