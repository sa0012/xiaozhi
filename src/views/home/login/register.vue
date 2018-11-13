<template>
  <div id="login">
    <div class="login-wrap">
      <div class="mobile">
        <div class="mobile-icon"></div>
        <input type="text" placeholder="请输入手机号" class="mobile-num">
      </div>
      <div class="mobile verify-code">
        <div class="verify-icon"></div>
        <input type="text" placeholder="请输入验证码" class="mobile-num">
        <div class="code-btn">获取验证码</div>
      </div>
      <div class="mobile password">
        <div class="pass-icon"></div>
        <input type="text" placeholder="请输入新密码" class="mobile-num">
      </div>
      <div class="mobile password">
        <div class="pass-icon"></div>
        <input type="text" placeholder="请再次输入新密码" class="mobile-num">
      </div>
      <div class="protocol">
        <input type="checkbox" class="pro-checkbox">
        <div class="agreement">我已同意并阅读</div>
        <div class="protocol-modal">《小智用户协议》</div>
      </div>
      <div class="login-button">注册</div>
      <div class="login-button" v-if="false">重置密码</div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/home/login/register';

export default controller;
</script>

<style scoped lang="scss">
    @import '../../../assets/style/home/login/login.scss';
</style>
