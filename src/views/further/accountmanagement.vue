<template>
  <div id="accountmanagement">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <mt-cell title="修改密码" is-link ></mt-cell>
      <mt-cell title="切换账号" is-link ></mt-cell>
      <mt-button size="large" type="danger" class="btnsave">退出账号</mt-button>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/accountmanagement'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/accountmanagement.scss';
</style>
