<template>
  <div id="repeaterThird">
    <div class="box">
     <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <h1>向导说明</h1>
        <p>请将摄像机接上电源适配器，待其自检结束，并在确认摄像机发出‘叮咚’声后，点击下一步</p>
        <p class="current">当前网络：ChinaNet_cNSh</p>
        <input type="text" placeholder="请输入密码">
        <mt-button type="primary" @click="goPage('/equipment/repeaterThird')">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/repeaterThird';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/equipment/addEquipment/repeaterThird.scss';
</style>
