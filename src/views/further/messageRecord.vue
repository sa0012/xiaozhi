<template>
  <div id="messageRecord">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <div class="list">
        <div class="listBox" v-for="(item,index) in items" :key="index">
          <router-link :to="{path:'/further/messagedetail',query:{titleid:item}}">
            <div class="boxtop">
              <div class="left">
                {{item.title}}
              </div>
              <div class="right">
                {{item.datatime}}
              </div>
            </div>
            <div class="boxcontent">
              {{item.datatxt}}
            </div>
          </router-link>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/messageRecord'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/messageRecord.scss';
</style>
