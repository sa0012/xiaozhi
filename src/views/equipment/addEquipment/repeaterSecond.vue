<template>
  <div id="repeaterSecond">
    <div class="box">
     <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <h1>WIFI连接</h1>
        <p>请将摄像机接上电源适配器，待其自检结束，并在确认摄像机发出‘叮咚’声后，点击下一步</p>
        <img class="img" :src="img" alt="">
        <mt-button type="primary" @click="goPage('/equipment/repeaterThird')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/repeaterSecond';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/repeaterSecond.scss';
</style>
