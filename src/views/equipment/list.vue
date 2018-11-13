<template>
    <div id="equipmentList">
      <div class="box">
     <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
      <div class="container">
        <mt-cell v-for="(item, index) in lists" :key="index.id" :title="item.name" @click.native="toPage('/equipment/equipMentDetails?type=' + $route.query.type)">
          <img :src="item.images" alt="">
        </mt-cell>
      </div>
      </div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/list';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/equipment/list.scss';
</style>
