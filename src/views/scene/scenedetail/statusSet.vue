<template>
    <div class="status-set">
        <navbar :showNext="showNext">
            <p class="confirm">确认</p>
        </navbar>

        <h3 class="status-title">前台射灯</h3>
        <p class="details">请选择需要控制的开关状态</p>
        <div class="add-btn" @click="toPage('/scene/detail?tab=isOneKey')">
            打开
        </div>
        <div class="add-btn close" @click="toPage('/scene/detail?tab=isOneKey')">
            关闭
        </div>
    </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/statusSet';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/statusSet.scss';
</style>
