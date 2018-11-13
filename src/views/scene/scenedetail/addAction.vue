<template>
    <div class="equipment">
        <navbar :showNext="showNext">
        </navbar>
        <mt-swipe style="width: 100%; height: 212px;" :auto="0" :show-indicators="false">
            <mt-swipe-item>
                <img src="../../../assets/images/home/bg.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <div style="width: 100%; height: 212px; background: green;"></div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div style="width: 100%; height: 212px; background: #1DAFFF;"></div>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="action-list">
            <li class="action-item border_bottom" v-for="(item, index) in actionList" :key="index" @click="toPage(item.url)">
                <img :src="item.iconUrl" alt="" class="icon-img">
                <div class="item-title">{{ item.title }}</div>
                <div class="arrow-wrap">
                    <img src="../../../assets/images/scene/arrow.png" alt="" class="arrow">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/addAction';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/addAction.scss';
</style>
