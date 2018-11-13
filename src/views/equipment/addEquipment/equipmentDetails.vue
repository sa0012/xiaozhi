<template>
  <div id="addEquipment">
    <navbar :showNext="showNext">
      <img @click="toPage('/equipment/sceneDetails')" v-if="$route.query.type === 'scenePanel'" slot="header-right" style="vertical-align: middle;" src="../../../assets/images//equipment/addEquipment/setting_icon.png" alt="">
    </navbar>
    <div class="contaniner">
      <!--<img :src="imgUrl[$route.query.type]" alt="">-->
      <img class="human-icon" v-if="$route.query.type === 'humanDetector'" src="../../../assets/images/equipment/addEquipment/human_icon.png" alt="">
      <div class="image-wrap">
        <img v-if="imgUrl[`${$route.query.type}`]" :src="imgUrl[`${$route.query.type}`]" alt="" class="bg-image">
        <div class="control" v-else-if="$route.query.type === 'scenePanel'">
          <div class="ctl-top">
            <i class="iconfont icon-sanjiaoxing-up"></i>
            <span class="text">A</span>
          </div>
          <div class="ctl-right">
            <span class="text">B</span>
            <i class="iconfont icon-sanjiaoxing-right"></i>
          </div>
          <div class="ctl-down">
            <span class="text">C</span>
            <i class="iconfont icon-sanjiaoxing-down"></i>
          </div>
          <div class="ctl-left">
            <i class="iconfont icon-sanjiaoxing-left"></i>
            <span class="text">D</span>
          </div>
          <div class="mid-wrap" ref="control">
            <div class="ctl-mid" ></div>
          </div>
        </div>
        <img v-else :src="imgUrl.smartSocket" alt="" class="bg-image">

      </div>
      <ul class="charset-list">
        <li class="charset-item border_bottom" v-for="(item, index) in charsetList[$route.query.type]" :key="index">
          <div class="charset-title">{{ item.title }}</div>
          <div class="charset-right" :class="{'is-range': item.range}">
            <span style="display: inline-block; vertical-align: middle;" @click="showModal(index)" v-if="item.isShowAlert">
              <span class="charset-name" v-if="item.charsetName">{{ item.charsetName }}</span>
              <img :src="item.arrow" alt="" class="charset-arrow" v-if="item.arrow">
            </span>
            <span style="display: inline-block; vertical-align: middle;" @click="selectSound(index)" v-else-if="item.showSoundModal">
              <span class="charset-name" v-if="item.charsetName">{{ item.charsetName }}</span>
              <img :src="item.arrow" alt="" class="charset-arrow" v-if="item.arrow">
            </span>
            <span style="display: inline-block; vertical-align: middle;" v-else>
              <span class="charset-name" v-if="item.charsetName">{{ item.charsetName }}</span>
              <img :src="item.arrow" alt="" class="charset-arrow" v-if="item.arrow">
            </span>
            <div class="range-wrap">
              <mt-range 
                v-if="item.range" 
                v-model="item.rangeValue" 
                :min="item.min" :max="item.max" 
                :step="item.step" 
                :bar-height="5">
              </mt-range>
            </div>
            <img :src="item.icon" alt="" class="charset-icon" v-if="item.icon">
            <i class="iconfont elec" :class="[item.iconfont && item.iconfont, isCharging && 'isCharging']" @click="changeElec(index)" :style="{fontSize: item.fontSize, fontWeight: item.fontWeight}"></i>
            <label v-if="item.switch"><input style="vertical-align: middle;" class="mui-switch mui-switch-anim switch-wrap" type="checkbox" v-model="item.switchDay"></label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/equipmentDetails';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/equipment/addEquipment/equipmentDetails.scss';
</style>
