<template>
    <div class="onekey">
        <navbar :showNext="showNext">
            <p slot="header-right" style="color: #19B0FF;" @click="toPage('/scene')" v-if="$route.query.tab !== 'isLinkpage'">下一步</p>
        </navbar>
        <div class="onekey-name border_bottom">
            <p class="onekey-title">场景名称 : </p>
            <input type="text" class="onekey-input" placeholder="请输入场景名称">
        </div>
        <div class="content">
            <div class="onekey-icon">
                <p class="icon-titles">场景图标: </p>
                <div class="icon-wrap">
                    <div class="inner">
                        <img src="../../../assets/images/home/open2-icon.png" />
                    </div>
                </div>
            </div>

            <h3 class="icon-title" style="margin-top: 74px;">关联布撤防</h3>
            <div class="relate-tab">
                <ul class="related-list">
                    <li class="list-item" v-for="(item, index) in relatedList" :key="index" :class="{'is-select shake': item.select}" @click="changeTab(index)">{{ item.title }}</li>
                </ul>
            </div>

            <h3 class="icon-title">小智主机</h3>
            <div class="machine-select">
                <select v-model="modelSelect" class="select-list">
                    <!--<option :value="modelSelect" class="default-item">{{ modelSelect | selectmac }}</option>-->
                    <option class="select-item" v-for="(item, index) in selectArr" :key="index" :value="item.id">{{ item.title }}</option>
                </select>
                <img class="select-icon" src="../../../assets/images/scene/icon4.png" alt="">
            </div>

            <h3 class="icon-title"> 编辑动作</h3>
            <div class="switch-day" v-for="(item, index) in editArr" :key="index">
                <img class="iconurl" :src="item.iconUrl" alt="">
                <p class="switch-title">{{ item.title }}</p>
                <p class="switch-btn">
                    <label><input class="mui-switch mui-switch-anim" type="checkbox" v-model="item.switchDay"></label>
                </p>
                <img class="delicon" :src="item.delUrl" alt="" @click="delItem(index)">
            </div>

            <!-- +++++++++++++++++++++++ 定时设置+每周重复 +++++++++++++++++ -->
            <div v-if="$route.query.tab === 'isTiming'">
                <h3 class="icon-title">定时设置</h3>
                <div class="time-wrap">
                    <p class="time-title">执行时间： 08:00</p>
                    <p class="time-icon">
                        <img src="../../../assets/images/scene/date.png" alt="">
                    </p>
                </div>
                <ul class="every-day">
                    <li class="day-item" v-for="(item, index) in dayArr" :key="index" :class="{'is-select': item.select}" @click="selectDay(index)">{{ item.title }}</li>
                </ul>
                <div class="switch-day">
                    <p class="switch-title">每周重复</p>
                    <p class="switch-btn">
                        <label><input class="mui-switch mui-switch-anim" type="checkbox" v-model="switchDay1"></label>
                    </p>
                </div>
            </div>

            <!--触发条件-->
            <div v-if="$route.query.tab === 'isLinkpage'">
                <h3 class="icon-title"> 触发条件</h3>
                <div class="add-btn temp">
                    温度小于10%
                </div>
                <div class="add-btn" @click="toPage('/scene/trigger')">
                    <img src="../../../assets/images/scene/add1.png" alt="">
                </div>
                <div class="add-btn save">
                    保存
                </div>
            </div>
        </div>
        <!-- ++++++++++++++++++++++ 底部弹窗组件 +++++++++++++++++++++ -->
        <!--<sheet-modal></sheet-modal>-->
    </div>
</template>

<script>
import controller from '@/controller/scene/onekey';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/onekey.scss';
</style>

