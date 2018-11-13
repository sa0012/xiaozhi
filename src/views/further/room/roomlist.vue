<template>
  <div id="roomlist">
    <navbar :showArrowLeft="showArrowLeft" :showNext="showNext">
      <img slot="header-right" @click="toPage('/further/management?type=better')" src="../../../assets/images/further/add.png">
    </navbar>
    <div class="content">
      <div class="row">
        <div class="el_col" v-for="(item,index) in items" :key="index" @click="toPage('/further/management?type=roomlist')">
          <img :src="item.listImg" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/roomlist'

export default controller
</script>

<style scoped lang='scss'>
@import '../../../assets/style/further/roomlist.scss';
</style>
