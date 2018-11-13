<template>
  <div id="repeaterFirst">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <div class="list">
          <div class="item" v-for="item in lists" :key="item.id">
            <img :src="item.img" alt="">
            <div class="name">
              <p v-bind:class="{ active: item.selected }">{{ item.name }}</p>
            </div>
          </div>
        </div>
        <mt-button type="primary" @click="goPage('/equipment/repeaterSecond')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/repeaterFirst';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/repeaterFirst.scss';
</style>
