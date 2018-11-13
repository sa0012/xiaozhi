<template>
    <div class="roomdetail">
        <navbar></navbar>
        <div class="room-name">
            <div class="room-title">房间名称</div>
            <input type="text" placeholder="请输入房间名称" class="room-input">
        </div>
        <h3 class="room-img">房间图片</h3>
        <div class="upload-wrap">
            <div class="room-upload">
                <div class="inner">
                    <img class="upload-add" src="../../../assets/images/home/upload.png" alt="">
                    <h3 class="add-title">点击添加房间图片</h3>
                </div>
            </div>
        </div>
        <section>
            <h3 class="room-img mach">主机选择</h3>
            <ul class="machine-list">
                <li class="list-item border_bottom" v-for="(item, index) in machineList" :key="index">
                    <div class="title-wrap">
                        <span class="title">{{ item.title }}</span>
                        <span class="status" :class="[item.status === 'online' ? 'online' : 'offline']">({{ item.status | lineStatus }})</span>
                    </div>
                    <div class="status-wrap">
                        <input type="checkbox" v-model="item.selectStatus" class="mac-check">
                        <img src="../../../assets/images/home/select1.png" class="sel-icon1" alt="" v-if="item.selectStatus">
                        <img src="../../../assets/images/home/select2.png" class="sel-icon1" alt="" v-if="!item.selectStatus">
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="room-img mach">控制设备</h3>
            <ul class="control-list">
                <li class="control-item border_bottom" v-for="(item, index) in controlList" :key="index">{{ item.title }}</li>
            </ul>
        </section>
        <div class="shadows sh-bind">
            <div class="shadow-title">摄像头绑定</div>
            <div class="shadow-status">
                未绑定
                <i class="sd-icon">&gt;</i>
            </div>
        </div>
        <h3 class="room-img">环境采样设备</h3>
        <ul class="env-eq">
            <li class="temperature env-item border_bottom">
                <img src="../../../assets/images/home/wd.png" class="temp-icon" alt="">
                <div class="env-title">温度： 23</div>
                <div class="env-btn">校准</div>
            </li>
            <li class="humidity env-item border_bottom">
                <img src="../../../assets/images/home/sd.png" class="env-icon" alt="">
                <div class="env-title">湿度： 23</div>
                <div class="env-btn">校准</div>
            </li>
        </ul>
    </div>
</template>

<script>
import controller from '@/controller/home/addequipment/roomDetail';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/roomDetail.scss';
</style>
