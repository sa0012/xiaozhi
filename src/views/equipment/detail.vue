<template>
    <div id="equipmentDetail">
      <div class="box">
     <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
        <img slot="header-right" @click="toPage('/equipment/addEquipment')" :src="images.add">
      </navbar>
      <div class="container">
        <mt-cell v-for="(item, index) in lists" :key="index.id" :title="item.name">
          <span v-show="item.status" class="oneline">在线</span>
          <span v-show="!item.status" class="outline">离线</span>
          <img @click="toPage('/equipment/property')" :src="item.images" alt="">
        </mt-cell>
      </div>
      </div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/detail';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/equipment/detail.scss';
</style>
