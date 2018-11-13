<template>
  <div id="masterSecond">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <p>请选择小智主机的网络连接方式</p>
        <div class="type">
            <div class="left-side" @click="goPage('/equipment/masterThird')">
                <img :src="images.fibre" alt="">
                <span>网络连接</span>
            </div>
            <div class="right-side" @click="goPage('/equipment/masterThird')">
                <img :src="images.wifi" alt="">
                <span>WIFI连接</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/masterSecond';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/masterSecond.scss';
</style>
