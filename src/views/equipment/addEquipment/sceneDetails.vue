<template>
    <div class="sceneDetails">
        <navbar :showNext="showNext">
        </navbar>
        <div class="panel-name border_bottom">
            <p class="panel-title">面板名称</p>
            <input type="text" class="panel-input" placeholder="请输入面板名称">
        </div>
        <div class="panel-attr">
            <p class="attr-title">面板属性</p>
            <p class="attr-name">四路面板</p>
        </div>
        <mt-navbar v-model="selected_detail">
            <mt-tab-item :id="index" v-for="(item, index) in sceneList" :key="index">{{ item }}</mt-tab-item>
        </mt-navbar>
        <div class="panel-name open border_bottom">
            <p class="panel-title">开关名称</p>
            <input type="text" class="panel-input" placeholder="请输入开关名称">
        </div>
        <div class="module-title">一键场景</div>
        <!-- tab-container -->
        <mt-tab-container v-model="selected_detail">
            <mt-tab-container-item :id="index" v-for="(item, index) in sceneList" :key="index">
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="module-entry">
            <ul class="list">
                <li class="list-item" v-for="(item, index) in detailsArr" :key="index">
                    <div :style="{'background': item.color}" class="list-wrap" v-if="item.title">
                        <div class="inner">
                            <img class="item-icon" :src="item.icon" alt="">
                            <h3 class="item-text">{{ item.title }}</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- ++++++++++++++ 保存按钮 ++++++++++++++++++++++ -->
        <div class="save-btn">保存</div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/sceneDetails';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/equipment/addEquipment/sceneDetails.scss';

</style>
