<template>
    <div class="add">
        <navbar :showNext="showNext">
            <p slot="header-right" @click="toPage('/scene/detail')">确认</p>
        </navbar>
        <mt-navbar v-model="selected_detail">
            <mt-tab-item :id="index" v-for="(item, index) in sceneList" :key="index">{{ item }}</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected_detail">
            <mt-tab-container-item :id="index" v-for="(item, index) in sceneList" :key="index">
                <div class="switch-day" v-for="(item, index) in editArr[selected_detail]" :key="index">
                    <img class="iconurl" :src="item.iconUrl" alt="">
                    <p class="switch-title">{{ item.title }}</p>
                    <p class="action-btn" v-if="item.openStatus" @click="toPage('/scene/detail')">打开</p>
                    <p class="time">{{ item.time }}s</p>
                    <img class="delicon" :src="item.delUrl" alt="" @click="delItem(index)">
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="add-btn" @click="toPage('/scene/addaction')">
            <img src="../../../assets/images/scene/add1.png" alt="">
        </div>
    </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/add';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/addscene.scss';
@import '../../../assets/style/scene/add.scss';
</style>
