<template>
  <div id="furterIndex">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <div class="userHeader">
        <router-link to="/further/accountmanagement">
          <img :src="userImg" alt="">
          <p>{{userID}}</p>
        </router-link>
      </div>
      <div class="list">
        <mt-cell  title="房间管理" to="/further/roomlist" is-link >
          <img slot="icon" src="../../assets/images/further/room-icon.png">
        </mt-cell>
        <mt-cell  title="安全锁">
          <img slot="icon" src="../../assets/images/further/lock-icon.png">
          <mt-switch v-model="value"></mt-switch>
        </mt-cell>
        <mt-cell v-for="(item,index) in items" :key="index" :title="item.title" :to="item.link" is-link >
          <img slot="icon" :src="item.userImg">
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/index.scss';
</style>
