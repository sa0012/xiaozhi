<template>
  <div class="setting1">
    <navbar :showNext="showNext">
    </navbar>
    <div class="compare border_bottom">
      <p class="compare-left compare-item">比较值</p>
      <p class="compare-item compare-icon">
        <img src="../../../assets/images/scene/arrow_right.png" alt="">
      </p>
      <p class="compare-right compare-item">
        <input type="text" class="compare-input" autofocus="autofocus">
      </p>
    </div>
    <h3 class="icon-title">附加条件</h3>
    <div class="add-btn border">
      且温度大于55%
      <img src="../../../assets/images/scene/del_icon.png" alt="" class="del-icon">
    </div>
    <div class="add-btn yellow" @click="toPage('/scene/addCondition')">
      <img src="../../../assets/images/scene/add1.png" alt="">
    </div>
    <h3 class="icon-title">执行动作</h3>
    <div class="add-btn border">
      打开灯
    </div>
    <div class="add-btn set-btn">
      <div class="left-wrap wrap-left">
        <div class="setting-left">设置动作</div>
      </div>
      <div class="left-wrap wrap-right">
        <div class="setting-right">调用情景</div>
      </div>
    </div>

    <div class="add-btn next" @click="toPage('/scene/trigger')">
      下一步
    </div>
  </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/setting1';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/setting1.scss';
</style>

