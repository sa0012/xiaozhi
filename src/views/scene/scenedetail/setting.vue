<template>
  <div class="setting">
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

    <div class="content-wrap">
      <ul class="action-list">
        <li class="action-item border_bottom">
          <div class="action-title">有效时间</div>
          <div class="action-input">
            <input type="text" class="title-text">
            <span class="title-line"></span>
            <input type="text" class="title-text">
          </div>
        </li>
        <li class="action-item border_bottom">
          <div class="action-title">执行时通知</div>
          <p class="switch-btn">
            <label><input class="mui-switch mui-switch-anim" type="checkbox" v-model="switchDay1"></label>
          </p>
        </li>
      </ul>

      <!-- +++++++++++++++++++++++ 定时设置+每周重复 +++++++++++++++++ -->
      <div class="timing-wrap">
        <h3 class="icon-title">定时设置</h3>
        <div class="time-wrap">
          <p class="time-title">执行时间： 08:00</p>
          <p class="time-icon">
            <img src="../../../assets/images/scene/date.png" alt="">
          </p>
        </div>
        <ul class="every-day">
          <li class="day-item" v-for="(item, index) in dayArr" :key="index" :class="{'is-select': item.select}" @click="selectDay(index)">{{ item.title }}</li>
        </ul>
        <div class="switch-day">
          <p class="switch-title">每周重复</p>
          <p class="switch-btn">
            <label><input class="mui-switch mui-switch-anim" type="checkbox" v-model="switchDay"></label>
          </p>
        </div>

        <div class="add-btn" @click="toPage('/scene/setting1')">
          下一步
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/setting';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/setting.scss';
</style>

