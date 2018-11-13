<template>
    <div id="equipmentProperty">
      <div class="box">
     <navbar :showArrowLeft="showArrowLeft" :showTitle="showTitle" :showNext="showNext">
      </navbar>
        <div class="container">
          <mt-cell v-for="(item, index) in lists" @click.native="showDialog(item)" :key="index.id" :title="item.name" is-link>
            <img slot="icon" :src="item.images" width="24" height="24">
            <span>{{ item.detail }}</span>
          </mt-cell>
          <!-- 弹窗 -->
          <div class="dialogWrapper"  v-show="show">
            <div class="dialog">
              <h1>请输入一个新名字</h1>
              <input type="text" placeholder="展示客厅">
              <select>
                <option value="我家">我家</option>
                <option value="父母家">父母家</option>
                <option value="公司">公司</option>
              </select>
              <div class="btn-group">
                <mt-button type="default" @click.native="hideDialog()">取消</mt-button>
                <mt-button type="primary" @click.native="hideDialog()">确定</mt-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import controller from "@/controller/equipment/property";

export default controller;
</script>

<style scoped lang="scss">
@import "../../assets/style/equipment/property.scss";
</style>
