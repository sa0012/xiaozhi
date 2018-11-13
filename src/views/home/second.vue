<template>
    <div class="second">
        <!--<div>
                <div class="left item">
                    <div class="triangle-bottomleft"></div>
                    <div class="title"></div>
                </div>
                <div class="mid item">
                    <div class="triangle-bottomleft"></div>
                    <div class="title"></div>
                    <div class="triangle-bottomleft"></div>
                </div>
                <div class="right item">
                    <div class="title"></div>
                    <div class="triangle-bottomleft"></div>
                </div>
            </div>-->
        <div class="input-item">
            <span>调用照相机: </span>
            <input type="file" accept="image/*" capture="camera">
        </div>
        <div class="input-item">
            <span>调用摄像头: </span>
            <input type="file" accept="video/*" capture="camcorder">
        </div>
        <div class="input-item">
            <span>调用录音机: </span>
            <input type="file" accept="audio/*" capture="microphone">
        </div>
        <i class="iconfont icon-success"></i>
    </div>
</template>

<script>
import controller from '@/controller/home/second';

export default controller;
</script>

<style scoped lang="scss">
// .second {
//     display: flex;
//     align-items: center;
// }

// .item {
//     height: 30px;
//     line-height: 30px;
//     flex: 1;
//     &.left {
//         background: red;
//     }
//     &.mid {
//         background: blue;
//     }
//     &.right {
//         background: green;
//     }
// }
    .input-item {
        margin-bottom: 30px;
    }
</style>
