<template>
  <div id="management">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <!-- +++++++++++++++++++++++++++ 表单输入+图片上传只有房间才有 ++++++++++++++++++++++ -->
      <div v-if="$route.query.type === 'roomlist'">
        <mt-field label="房间名称" placeholder="请输入房间名称" v-model="roomname"></mt-field>
        <mt-field label="房间图片" readonly></mt-field>
        <div class="box">
          <input type="file" name="file" accept="image/*" />
          <img id="portrait" :src="userImg">
        </div>
      </div>
      <!-- ++++++++++++++++++++++++ 房间+更多参数 +++++++++++++++++++++++++++++ -->
      <mt-field label="主机选择" readonly></mt-field>
      <mt-radio align="right" v-model="value" :options="['小智主机1（在线）', '小智主机2（离线）', '小智主机3（在线）']">
      </mt-radio>
      <mt-field label="控制设备" readonly></mt-field>
      <p class="managementchild" v-for="(item,index) in items" :key="index">{{item.title}}</p>
      <mt-cell title="摄像头绑定" to="//github.com" is-link value="未绑定">
      </mt-cell>
      <mt-cell title="温度：2.5°C" to="/home/TempControl">
        <img slot="icon" src="../../../assets/images/further/room/water-icon.png">
        <mt-button type="primary" size="small">校准</mt-button>
      </mt-cell>
      <mt-cell title="湿度：28%" to="/home/TempControl">
        <img slot="icon" src="../../../assets/images/further/room/humidity-icon.png">
        <mt-button type="primary" size="small">校准</mt-button>
      </mt-cell>
      <mt-button size="large" type="primary" class="btnsave">保存</mt-button>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/management'

export default controller
</script>

<style scoped lang='scss'>
@import '../../../assets/style/further/management.scss';
</style>
