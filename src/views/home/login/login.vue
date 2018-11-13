<template>
  <div id="login">
    <div class="login-wrap">
      <div class="mobile">
        <div class="mobile-icon"></div>
        <input type="text" placeholder="请输入手机号" class="mobile-num">
      </div>
      <div class="mobile password">
        <div class="pass-icon"></div>
        <input type="text" placeholder="请输入密码" class="mobile-num">
      </div>
      <div class="forget-pass">忘记密码？</div>
      <div class="login-button">登陆</div>
      <div class="bottom-msg">
        <span>还没有账号，</span>
        <span class="register" @click="toPage('/home/register')">点击注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/home/login/login';

export default controller;
</script>

<style scoped lang="scss">
    @import '../../../assets/style/home/login/login.scss';
</style>
