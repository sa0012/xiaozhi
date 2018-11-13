<template>
  <div id="setup">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <div class="contentBox">
        <div class="list">
          <div>
            声音
          </div>
          <div>
            铃声1
          </div>
        </div>
        <div class="list">
          <div>
            音量
          </div>
          <div>
            <mt-range v-model="rangeValue"></mt-range>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/setup'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/setup.scss';
</style>
