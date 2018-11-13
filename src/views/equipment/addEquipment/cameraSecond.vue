<template>
  <div id="cameraSecond">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <h1><img :src="img"/>WIFI连接</h1>
        <p>请将摄像机接上电源适配器，待其自检结束，并在确认摄像机发出‘叮咚’声后，点击下一步</p>
        <img class="img" :src="img" alt="">
        <mt-button type="primary" @click="goPage('/equipment/cameraThird')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/cameraSecond';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/cameraSecond.scss';
</style>
