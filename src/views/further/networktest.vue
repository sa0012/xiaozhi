<template>
  <div id="networktest">
    <navbar :showNext="showNext"></navbar>
    <div class="content">
      <div class="list">
        <div class="listTop" v-for="(item,index) in items" :key="index">
          <div class="listBox">
            {{item.title}}
          </div> 
          <div class="listcontent">
            <div>{{item.success}}&nbsp;{{item.successrate}}</div>
            <div>{{item.delayed}}&nbsp;{{item.delayedrate}}</div>
          </div>
        </div>
        <div class="equipment">
          <div class="listBox">
            {{equipmenttitle}}
          </div> 
          <div class="listcontent">
            <div>{{equipment}}&nbsp;{{equipmentnum}}</div>
          </div>
        </div>
        <div class="listcotent" v-for="item in equipmentlist" :key="item.title">
          <div class="listBox">
            {{item.title}}
          </div> 
          <div class="listcontent">
            <div>{{item.name}}&nbsp;{{item.nameattribute}}</div>
            <div>{{item.success}}&nbsp;{{item.successrate}}</div>
            <div>{{item.delayed}}&nbsp;{{item.delayedrate}}</div>
          </div>
        </div>
        <div class="listfooter">
          <div class="listBox">
            {{basicdata}}
          </div> 
          <div class="basicBox">
            <div>Server IP : &nbsp;{{ServerIP}}</div>
            <div>Phone IP : &nbsp;{{PhoneIP}}</div>
            <div>Phone ID : &nbsp;{{PhoneID}}</div>
          </div>
        </div>
        <mt-button size="large" type="primary" class="btnsave">开始测试</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/networktest'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/networktest.scss';
</style>
