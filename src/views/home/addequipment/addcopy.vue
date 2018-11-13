<template>
  <div class="equipment">
    <navbar :showNext="showNext">
      <p slot="header-right" style="color: #19AFFD;">确认</p>
    </navbar>
    <mt-swipe style="width: 100%; height: 212px;" :auto="0" :show-indicators="false" @change="handleChange">
      <mt-swipe-item>
        <img src="../../../assets/images/home/bg.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <div style="width: 100%; height: 212px; background: green;"></div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div style="width: 100%; height: 212px; background: #1DAFFF;"></div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="room-btn">客厅</div>
    <ul class="room-list">
      <li class="list-item border_bottom" v-for="(item, index) in roomList" :key="index">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-selected">
          <img class="close-icon" :src="item.closeUrl" alt="" v-if="!item.selected">
          <img class="right-icon" :src="item.rightUrl" alt="" v-else>
          <input type="checkbox" class="item-checkbox" v-model="item.selected">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import controller from '@/controller/home/addequipment/addcopy';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/addcopy.scss';
</style>
