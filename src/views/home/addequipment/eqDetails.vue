<template>
  <div class="equipment">
    <navbar :showNext="showNext"></navbar>
    <ul class="list">
      <li class="list-item border_bottom" v-for="(item, index) in listArr[$route.query.type]" :key="index">
        <div>
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import controller from '@/controller/home/addequipment/eqDetails';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/index.scss';
</style>
