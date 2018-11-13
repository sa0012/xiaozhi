<template>
  <div id="masterFirst">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <h1><img :src="images.plane"/>配置向导</h1>
        <p>请将小智主机接通电源后（用自带电源适配器即可）</p>
        <p>约30秒后，当蓝灯由闪烁变为长亮时请点击下一步</p>
        <img class="img" :src="images.adapter" alt="">
        <mt-button type="primary" @click="goPage('/equipment/masterSecond')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/masterFirst';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/masterFirst.scss';
</style>
