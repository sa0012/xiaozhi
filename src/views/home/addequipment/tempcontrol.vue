<template>
    <div class="tempcontrol">
        <navbar :showNext="showNext"></navbar>
        <div class="bg-wrap">
            <img src="../../../assets/images/home/wd_bg.png" alt="">
            <div class="content">
                <p class="first-title">18.5 <span class="temp">℃</span></p>
                <p class="second-title">温度已上调1℃</p>
            </div>
        </div>
        <div class="bottom-nav">
            <div class="nav-up">
                <span class="title">温度上调</span>
                <img src="../../../assets/images/home/up.png" alt="">
            </div>
            <div class="middle-line"></div>
            <div class="nav-down">
                <span class="title">温度下调</span>
                <img src="../../../assets/images/home/down.png" alt="">
            </div>
        </div>
        <div class="confirm" @click="toPage('/further/management')">确认校准</div>
        <div class="close" @click="toPage('/further/management')">取消</div>
    </div>
</template>

<script>
import controller from '@/controller/home/addequipment/tempcontrol';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/tempcontrol.scss';
</style>
