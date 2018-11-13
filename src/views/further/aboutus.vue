<template>
  <div id="aboutus">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <p><img src="../../assets/images/further/aboutimg-icon.png" alt=""></p>
      {{content}}
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/aboutus'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/aboutus.scss';
</style>
