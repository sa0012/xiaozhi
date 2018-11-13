<template>
  <div id="robotFirst">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <h1><img :src="img"/>WIFI连接</h1>
        <p>长按机器人顶部的Z<span>Z</span>图标,待指示灯变成黄色并开始旋转，点击下一步进行网络配置</p>
        <img class="img" :src="img" alt="">
        <mt-button type="primary" @click="goPage('/equipment/robotSecond')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/robotFirst';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/robotFirst.scss';
</style>
