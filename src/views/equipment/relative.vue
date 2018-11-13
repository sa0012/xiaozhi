<template>
    <div id="equipmentRelative">
      <div class="box">
        <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
        <div class="container">
            <div class="list">
                <div class="item" v-for="(item, index) in lists" :key="index">
                    <p>{{ item.telphone }}</p>
                    <p>{{ item.name }}</p>
                    <mt-button>解除此设备与账号的关联</mt-button>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/relative';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/equipment/relative.scss';
</style>
