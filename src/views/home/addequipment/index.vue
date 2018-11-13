<template>
  <div class="equipment">
    <navbar :showNext="showNext"></navbar>
    <ul class="list">
      <li class="list-item border_bottom" v-for="(item, index) in listArr" :key="index">
        <div @click="toPage(`/home/addcopy?type=${item.query}`)" v-if="item.query === 'copyRm'">
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
        <div @click="toPage(`/home/addscene?type=${item.query}`)" v-else-if="item.query === 'scene'">
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
        <div @click="toPage(`/home/details?type=${item.query}`)" v-else-if="item.query === 'remote'">
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
        <div @click="toPage(`/home/eqDetails?type=${item.query}`)" v-else>
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import controller from '@/controller/home/addequipment/';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/index.scss';
</style>
