<template>
  <div id="addequipment">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <p>主要设备</p>
      <mt-cell v-for="item in items" :key="item.num" is-link :title="item.title">
        <img slot="icon" :src="item.userImg">
        {{item.num}}
      </mt-cell>
      <p>其他设备</p>
      <mt-cell v-for="item in otheritems" :key="item.num" is-link :title="item.title">
        <img slot="icon" :src="item.userImg">
        {{item.num}}
      </mt-cell>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/addequipment'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/addequipment.scss';
</style>
