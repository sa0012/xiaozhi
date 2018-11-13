<template>
  <div id="masterThird">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <h1><img :src="images.iconwifi"/>WIFI连接</h1>
        <p>观察小智主机指示灯</p>
        <p>当黄灯处于闪烁状态，点击下一步</p>
        <img class="img" :src="images.adapter" alt="">
        <mt-button type="primary" @click="goPage('/equipment/masterFourth')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/masterThird';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/masterThird.scss';
</style>
