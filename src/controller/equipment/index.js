import $ from '@/utils'
import add from '@/assets/images/equipment/add.png'
import arrowup from '@/assets/images/equipment/arrow-up.png'
import arrowdown from '@/assets/images/equipment/arrow-down.png'
import icon1 from '@/assets/images/equipment/icon1.png'
import icon2 from '@/assets/images/equipment/icon2.png'
import icon3 from '@/assets/images/equipment/icon3.png'
import icon4 from '@/assets/images/equipment/icon4.png'
import icon5 from '@/assets/images/equipment/icon5.png'
import icon6 from '@/assets/images/equipment/icon6.png'
import icon7 from '@/assets/images/equipment/icon7.png'
import icon8 from '@/assets/images/equipment/icon8.png'
import icon9 from '@/assets/images/equipment/icon9.png'
import icon10 from '@/assets/images/equipment/icon10.png'
import icon11 from '@/assets/images/equipment/icon11.png'
import icon12 from '@/assets/images/equipment/icon12.png'
import icon13 from '@/assets/images/equipment/icon13.png'
import icon14 from '@/assets/images/equipment/icon14.png'
import icon15 from '@/assets/images/equipment/icon15.png'
import icon16 from '@/assets/images/equipment/icon16.png'
import icon17 from '@/assets/images/equipment/icon17.png'
import icon18 from '@/assets/images/equipment/icon18.png'
import icon19 from '@/assets/images/equipment/icon19.png'
import icon20 from '@/assets/images/equipment/icon20.png'
import icon21 from '@/assets/images/equipment/icon21.png'
import icon22 from '@/assets/images/equipment/icon22.png'
import icon23 from '@/assets/images/equipment/icon23.png'
import icon24 from '@/assets/images/equipment/icon24.png'
import icon25 from '@/assets/images/equipment/icon25.png'
import icon26 from '@/assets/images/equipment/icon26.png'
import icon27 from '@/assets/images/equipment/icon27.png'
import icon28 from '@/assets/images/equipment/icon28.png'
import icon29 from '@/assets/images/equipment/icon29.png'


export default {
  name: 'equipment',
  data() {
    return {
      images: {
        add: add,
        arrowdown: arrowdown,
        arrowup: arrowup
      },
      list1: [{
        images: icon1,
        name: '小智主机',
        type: 'xzHosts',
        num: 3
      }, {
        images: icon2,
        name: '小智机器人',
        type: 'xzRobot',
        num: 2
      }, {
        images: icon3,
        name: '摄像头',
        type: 'camera',
        num: 4
      }, {
        images: icon4,
        name: '小智分机',
        type: 'xzExtension',
        num: 3
      }, {
        images: icon5,
        name: '物联中继器',
        type: 'ioRepeater',
        num: 3
      }, {
        images: icon6,
        name: '智能魔镜',
        type: 'smartMirror',
        num: 3
      }, {
        images: icon7,
        name: '智能净水器',
        type: 'waterPurifier',
        num: 3
      }],
      list2: [{
        images: icon8,
        name: '红外控制器',
        type: 'infraredController',
        num: 3
      }, {
        images: icon9,
        name: '智能单火开关',
        type: 'singleFireSwitch',
        num: 2
      }, {
        images: icon10,
        name: '智能零火开关',
        type: 'zeroFireSwitch',
        num: 2
      }, {
        images: icon11,
        name: '智能插座',
        type: 'smartSocket',
        num: 4
      }, {
        images: icon12,
        name: '智能窗帘',
        type: 'smartCurtain',
        num: 1
      }, {
        images: icon13,
        name: '情景面板',
        type: 'scenePanel',
        num: 2
      }, {
        images: icon14,
        name: '情景遥控器',
        type: 'sceneControl',
        num: 3
      }, {
        images: icon15,
        name: '推窗器',
        type: 'pushWindow',
        num: 2
      }],
      list3: [{
        images: icon16,
        name: '智能门锁',
        type: 'smartDoorLook',
        num: 2
      }, {
        images: icon17,
        name: '智能猫眼',
        type: 'smartCatEye',
        num: 2
      }, {
        images: icon18,
        name: '门窗感应器',
        type: 'doorWindowSensor',
        num: 3
      }, {
        images: icon19,
        name: '人体探测器',
        type: 'humanDetector',
        num: 4
      }, {
        images: icon20,
        name: '燃气报警器',
        type: 'smokeDetector',
        num: 1
      }, {
        images: icon21,
        name: '烟雾报警器',
        type: 'gasAlarm',
        num: 2
      }, {
        images: icon22,
        name: '一氧化碳报警器',
        type: 'co1Alarm',
        num: 4
      }, {
        images: icon23,
        name: '水浸报警器',
        type: 'floodAlarm',
        num: 4
      }, {
        images: icon24,
        name: '声光报警器',
        type: 'audibleAlarm',
        num: 1
      }, {
        images: icon25,
        name: '智能机械手',
        type: 'smartRobot',
        num: 1
      }],
      list4: [{
        images: icon26,
        name: '温湿度传感器',
        type: 'weatherSensor',
        num: 1
      }, {
        images: icon27,
        name: '风雨传感器',
        type: 'tempAndHumiSensor',
        num: 1
      }, {
        images: icon28,
        name: 'PM2.5检测器',
        type: 'pmDetector',
        num: 1
      }],
      list5: [{
        images: icon29,
        name: '其他设备',
        type: 'other',
        num: 2
      }],
      showNext: false,
      showArrowLeft: false,
      listSta1: true,
      listSta2: true,
      listSta3: true,
      listSta4: true
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {
    toPage(url) {
      this.$router.push({path: url})
    },
    toggle (id) {
      if (id === 1) {
        this.listSta1 = !this.listSta1
      }
      if (id === 2) {
        this.listSta2 = !this.listSta2
      }
      if (id === 3) {
        this.listSta3 = !this.listSta3
      }
      if (id === 4) {
        this.listSta4 = !this.listSta4
      }
    }
  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
