<template>
  <div id="messagedetail">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <div class="list">
        <div class="listBox">
          <p class="title">
            {{title}}
          </p>
          <p class="time">
            {{item.datatime}}
          </p>
          <div class="boxcontent">
            {{datatxt}}
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/messagedetail'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/messagedetail.scss';
</style>
