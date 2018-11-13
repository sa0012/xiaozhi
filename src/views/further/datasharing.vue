<template>
  <div id="datasharing">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <div class="userHeader">
        <input class="inputId" placeholder="请输入他人的APP账号" v-model="userid" />
        <mt-button size="large" type="primary" class="btnsave">确认分享</mt-button>
      </div>
      <div class="list">
        <p class="sharTxt">我收到的分享</p>
        <mt-cell v-for="(item,index) in items" :key="index" :title="item.title" :label="item.datatime">
          <mt-button size="small" type="primary">应用</mt-button>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/datasharing'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/datasharing.scss';
</style>
