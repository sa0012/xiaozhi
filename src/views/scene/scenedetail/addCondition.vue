<template>
  <div class="add-condition">
    <navbar :showNext="showNext">
    </navbar>
    <mt-swipe style="width: 100%; height: 212px;" :auto="0" :show-indicators="false">
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
    <h3 class="icon-title">附加条件</h3>
    <div class="add-wrap">
      <div class="add-btn-left">
        <div class="add-btn btn-left">
          <select v-model="modelSelect" class="select-list">
            <option class="select-item" v-for="(item, index) in selectArr" :key="index" :value="item.id">{{ item.title }}</option>
          </select>
          <img src="../../../assets/images/scene/select_icon.png" alt="" class="select-icon">
        </div>
      </div>
      <div class="add-btn-arrow">
        <img src="../../../assets/images/scene/next_icon.png" alt="">
      </div>
      <div class="add-btn-right">
        <div class="add-btn btn-right">
          <input type="text" class="add-input" autofocus="autofocus">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/addCondition';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/addCondition.scss';
</style>
