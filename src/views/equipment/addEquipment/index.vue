<template>
  <div id="addEquipment">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showNext="showNext"></navbar>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.id" @click="goPage(item.url)">
          <div class="imgWrapper">
            <img :src="item.images" alt="">
          </div>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/index.scss';
</style>
