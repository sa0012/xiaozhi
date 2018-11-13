import $ from '@/utils'
import icon1 from '@/assets/images/equipment/addEquipment/icon1.png'
import icon2 from '@/assets/images/equipment/addEquipment/icon2.png'
import icon3 from '@/assets/images/equipment/addEquipment/icon3.png'
import icon4 from '@/assets/images/equipment/addEquipment/icon4.png'
import icon5 from '@/assets/images/equipment/addEquipment/icon5.png'
import icon6 from '@/assets/images/equipment/addEquipment/icon6.png'
import icon7 from '@/assets/images/equipment/addEquipment/icon7.png'
import icon8 from '@/assets/images/equipment/addEquipment/icon8.png'
import icon9 from '@/assets/images/equipment/addEquipment/icon9.png'
import icon10 from '@/assets/images/equipment/addEquipment/icon10.png'
import icon11 from '@/assets/images/equipment/addEquipment/icon11.png'
import icon12 from '@/assets/images/equipment/addEquipment/icon12.png'
import icon13 from '@/assets/images/equipment/addEquipment/icon13.png'
import icon14 from '@/assets/images/equipment/addEquipment/icon14.png'
import icon15 from '@/assets/images/equipment/addEquipment/icon15.png'
import icon16 from '@/assets/images/equipment/addEquipment/icon16.png'
import icon17 from '@/assets/images/equipment/addEquipment/icon17.png'
import icon18 from '@/assets/images/equipment/addEquipment/icon18.png'
import icon19 from '@/assets/images/equipment/addEquipment/icon19.png'
import icon20 from '@/assets/images/equipment/addEquipment/icon20.png'
import icon21 from '@/assets/images/equipment/addEquipment/icon21.png'
import icon22 from '@/assets/images/equipment/addEquipment/icon22.png'
import icon23 from '@/assets/images/equipment/addEquipment/icon23.png'
import icon24 from '@/assets/images/equipment/addEquipment/icon24.png'


export default {
  name: 'addEquipment',
  data() {
    return {
      list: [{
        images: icon1,
        name: '小智主机',
        url: '/equipment/masterFirst'
      }, {
        images: icon2,
        name: '小智机器人',
        url: '/equipment/robotFirst'

      }, {
        images: icon3,
        name: '摄像头',
        url: '/equipment/cameraFirst'
      }, {
        images: icon4,
        name: '物联中继器',
        url: '/equipment/repeaterFirst'
      }, {
        images: icon5,
        name: '红外控制器'
      }, {
        images: icon6,
        name: '智能开关'
      }, {
        images: icon7,
        name: '智能插座'
      }, {
        images: icon8,
        name: '智能窗帘'
      }, {
        images: icon9,
        name: '情景遥控器'
      }, {
        images: icon10,
        name: '情景面板'
      }, {
        images: icon11,
        name: '推窗器'
      }, {
        images: icon12,
        name: '智能机械手'
      }, {
        images: icon13,
        name: '温湿度传感器'
      }, {
        images: icon14,
        name: '声光报警器'
      }, {
        images: icon15,
        name: '风雨传感器'
      }, {
        images: icon16,
        name: '烟雾报警器'
      }, {
        images: icon17,
        name: '人体探测器'
      }, {
        images: icon18,
        name: '智能门锁'
      }, {
        images: icon19,
        name: '燃气报警器'
      }, {
        images: icon20,
        name: '门窗感应器'
      }, {
        images: icon21,
        name: 'CO报警器'
      }, {
        images: icon22,
        name: '水浸报警器'
      }, {
        images: icon23,
        name: '小智分机'
      }, {
        images: icon24,
        name: '其他'
      }],
      showArrowLeft: true,
      showNext: false,
      showTitle: true
    }
  },
  computed: {
    data() {
    }
  },
  methods: {
    backPage() {
      window.history.back()
    },
    goPage(url) {
      this.$router.push(url)
    }
  },
  beforeMount() {
    
  },
  mounted() {
  },
  destroyed() {
  }
}
