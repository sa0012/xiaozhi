<template>
    <div class="equipment">
        <navbar></navbar>
        <div class="module-entry">
            <ul class="list">
                <li class="list-item">
                    <img class="item-icon" src="../../../assets/images/home/room1.png" alt="">
                    <h3 class="item-text">客厅</h3>
                </li>
                <li class="list-item">
                    <img class="item-icon" src="../../../assets/images/home/room2.png" alt="">
                    <h3 class="item-text">厨房</h3>
                </li>
                <li class="list-item">
                    <img class="item-icon" src="../../../assets/images/home/room3.png" alt="">
                    <h3 class="item-text">卧室</h3>
                </li>
                <li class="list-item">
                    <img class="item-icon" src="../../../assets/images/home/room4.png" alt="">
                    <h3 class="item-text">洗手间</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import controller from '@/controller/home/addequipment/roomlist';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/roomlist.scss';
</style>
