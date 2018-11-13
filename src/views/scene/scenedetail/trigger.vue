<template>
    <div class="trigger">
        <navbar :showNext="showNext">
        </navbar>

        <div class="module-entry">
            <ul class="list">
                <li class="list-item" v-for="(item, index) in detailsArr" :key="index">
                    <div :style="{'background': item.color}" class="list-wrap" @click="toPage(item.url)">
                        <div class="inner">
                            <img class="item-icon" :src="item.iconUrl" alt="">
                            <h3 class="item-text">{{ item.title }}</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/trigger';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/trigger.scss';
</style>
