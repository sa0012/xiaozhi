<template>
  <div id="cameraFourth">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <input type="text" placeholder="请输入摄像头UID">
        <input type="text" placeholder="请输入密码">
        <mt-button type="primary" @click="goPage('/equipment/detail')">确认</mt-button>
        <mt-button type="primary" @click="goPage('/equipment/detail')">扫码</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/cameraFourth';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/cameraFourth.scss';
</style>
