<template>
  <div id="cameraFirst">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <p>请选择添加摄像头方式</p>
        <div @click="goPage('/equipment/cameraSecond')">WIFI智能设置</div>
        <div @click="goPage('/equipment/cameraFourth')">网线连接或无线连接路由器</div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/careraFirst';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/equipment/addEquipment/careraFirst.scss';
</style>
