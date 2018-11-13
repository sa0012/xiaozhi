<template>
  <div id="equipment">
    <div class="box">
      <navbar :showArrowLeft="showArrowLeft" :showNext="showNext">
        <img slot="header-right" @click="toPage('/equipment/addEquipment')" :src="images.add">
      </navbar>
      <div class="list">
        <mt-cell v-for="item in list1" :key="item.id" :title="item.name" is-link  @click.native="toPage(`/equipment/list?type=${item.type}`)">
          <span>{{ item.num }}</span>
          <img slot="icon" :src="item.images" width="24" height="24">
        </mt-cell>
        <mt-cell title="控制类（18）">
          <p @click="toggle(1)" class="title-bar">收起<img :src="images.arrowup" width="24" height="24"></p>
        </mt-cell>
        <mt-cell v-for="item in list2" :key="item.id" v-show="listSta1" :title="item.name" is-link @click.native="toPage(`/equipment/list?type=${item.type}`)">
          <span>{{ item.num }}</span>
          <img slot="icon" :src="item.images" width="24" height="24">
        </mt-cell>
        <mt-cell title="安防类（18）">
          <p @click="toggle(2)" class="title-bar">收起<img :src="images.arrowup" width="24" height="24"></p>
        </mt-cell>
        <mt-cell v-for="item in list3" :key="item.id" v-show="listSta2" :title="item.name" is-link @click.native="toPage(`/equipment/list?type=${item.type}`)">
          <span>{{ item.num }}</span>
          <img slot="icon" :src="item.images" width="24" height="24">
        </mt-cell>
        <mt-cell title="环境采样（9）">
          <p @click="toggle(3)" class="title-bar">收起<img :src="images.arrowup" width="24" height="24"></p>
        </mt-cell>
        <mt-cell v-for="item in list4" :key="item.id" v-show="listSta3" :title="item.name" is-link @click.native="toPage(`/equipment/list?type=${item.type}`)">
          <span>{{ item.num }}</span>
          <img slot="icon" :src="item.images" width="24" height="24">
        </mt-cell>
        <mt-cell title="其他（2）">
          <p @click="toggle(4)" class="title-bar">收起<img :src="images.arrowup" width="24" height="24"></p>
        </mt-cell>
        <mt-cell v-for="item in list5" :key="item.id" v-show="listSta4" :title="item.name" is-link @click.native="toPage(`/equipment/list?type=${item.type}`)">
          <span>{{ item.num }}</span>
          <img slot="icon" :src="item.images" width="24" height="24">
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment'

export default controller
</script>

<style scoped lang="scss">
  @import '../../assets/style/equipment/index.scss';
</style>
