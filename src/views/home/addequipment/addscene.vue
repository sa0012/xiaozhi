<template>
  <div class="equipment">
    <navbar :showNext="showNext"></navbar>
    <div class="module-entry">
      <ul class="list">
        <li class="list-item" v-for="(item, index) in detailsArr" :key="index">
          <div :style="{'background': item.color}" class="list-wrap">
            <div class="inner">
              <img class="item-icon" :src="item.icon" alt="">
              <h3 class="item-text">{{ item.title }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/home/addequipment/addscene';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/addscene.scss';
</style>
