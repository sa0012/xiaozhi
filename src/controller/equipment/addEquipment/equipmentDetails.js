import $ from '@/utils'
// 智能插座
import smartSocket from '@/assets/images/equipment/addEquipment/socket.png';
// 声光报警器
import audibleAlarm from '@/assets/images/equipment/addEquipment/audible_alarm.png';
// 智能窗帘
import smartCurtain from '@/assets/images/equipment/addEquipment/chaunglian.png';
// 门窗传感器
import doorWindowSensor from '@/assets/images/equipment/addEquipment/door_win_sensors.png';
// 水浸报警器
import floodAlarm from '@/assets/images/equipment/addEquipment/flood_detection.png';
// 燃气报警器
import gasAlarm from '@/assets/images/equipment/addEquipment/gas_detection.png';
// 人体探测器
import humanDetector from '@/assets/images/equipment/addEquipment/human_detection.png';
// 烟雾报警器
import smokeDetector from '@/assets/images/equipment/addEquipment/smoking.png';
// 
import humanIcon from '@/assets/images/equipment/addEquipment/human_icon.png'

import arrow from '@/assets/images/equipment/addEquipment/arrow-right.png'

export default {
  name: 'equipment',
  data() {
    return {
      imgUrl: {
        smartSocket, // 智能插座
        audibleAlarm, // 声光报警器
        smartCurtain, // 智能窗帘
        doorWindowSensor, // 门窗传感器
        floodAlarm, // 水浸报警器
        gasAlarm, // 燃气报警器
        humanDetector, // 人体探测器
        smokeDetector, // 烟雾报警器
        //xzExtension, //小智分机
        //ioRepeater, //物联中继器
        //smartMirror, //智能魔镜
        //waterPurifier, //智能净水器
        //infraredController, //红外控制器
        //singleFireSwitch, //智能单火开关
        //zeroFireSwitch, //智能零火开关
        // scenePanel, //情景面板
        //sceneControl, //情景遥控器
        //pushWindow, //推窗器
        //smartDoorLook, //智能门锁
        //smartCatEye, //智能猫眼
        //co1Alarm, //一氧化碳报警器
        //smartRobot, //智能机械手
        //weatherSensor, //风雨传感器
        //tempAndHumiSensor, //温湿度传感器
        //pmDetector, //PM2.5检测器
        //other, //其他
      },
      charsetList: {
        // 小智分机
        xzExtension: [{
            title: '名称',
            charsetName: '小智分机',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 物联中继器
        ioRepeater: [{
            title: '名称',
            charsetName: '物联中继器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能魔镜
        smartMirror: [{
            title: '名称',
            charsetName: '智能魔镜',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能净水器
        waterPurifier: [{
            title: '名称',
            charsetName: '智能净水器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 红外控制器
        infraredController: [{
            title: '名称',
            charsetName: '红外控制器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能单火开关
        singleFireSwitch: [{
            title: '名称',
            charsetName: '智能单火开关',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能零火开关
        zeroFireSwitch: [{
            title: '名称',
            charsetName: '智能零火开关',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能插座
        smartSocket: [{
            title: '名称',
            charsetName: '智能插座',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '状态',
            charsetName: '',
            arrow: '',
            iconfont: 'icon-lightningbshandian',
            // switch: true,
            // switchDay: true
          },
        ],
        // 情景面板
        scenePanel: [{
            title: '名称',
            charsetName: '情景面板',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 
        sceneControl: [{
            title: '名称',
            charsetName: '情景面板',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能窗帘
        smartCurtain: [{
            title: '名称',
            charsetName: '智能窗帘',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '电量',
            charsetName: '76%',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '关联安防',
            charsetName: '',
            iconfont: 'icon-selected',
            fontSize: '36px',
            fontWeight: 'bold'
          }
        ],
        // 推窗器
        pushWindow: [{
            title: '名称',
            charsetName: '推窗器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能门锁
        smartDoorLook: [{
            title: '名称',
            charsetName: '智能门锁',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 智能猫眼
        smartCatEye: [{
            title: '名称',
            charsetName: '智能猫眼',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 门窗传感器
        doorWindowSensor: [{
            title: '名称',
            charsetName: '门窗传感器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '电量',
            charsetName: '76%',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '报警',
            charsetName: '',
            arrow: '',
            icon: '',
            switch: true,
            switchDay: false
          },
        ],
        // 人体探测器
        humanDetector: [{
            title: '名称',
            charsetName: '人体探测器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '电量',
            charsetName: '76%',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '报警',
            charsetName: '',
            arrow: '',
            icon: '',
            switch: true,
            switchDay: false
          },
        ],
        // 烟雾报警器
        smokeDetector: [{
            title: '名称',
            charsetName: '烟雾报警器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '电量',
            charsetName: '76%',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '关联安防',
            charsetName: '',
            iconfont: 'icon-selected',
            fontSize: '36px',
            fontWeight: 'bold'
          }
        ],
        // 燃气报警器
        gasAlarm: [{
            title: '名称',
            charsetName: '燃气报警器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '关联安防',
            charsetName: '',
            iconfont: 'icon-selected',
            fontSize: '36px',
            fontWeight: 'bold'
          }
        ],
        // 一氧化碳报警器
        co1Alarm: [{
            title: '名称',
            charsetName: '一氧化碳报警器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 水浸报警器
        floodAlarm: [{
            title: '名称',
            charsetName: '水浸报警器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '电量',
            charsetName: '76%',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '报警',
            charsetName: '',
            arrow: '',
            icon: '',
            switch: true,
            switchDay: false
          },
          {
            title: '关联安防',
            charsetName: '',
            iconfont: 'icon-selected',
            fontSize: '36px',
            fontWeight: 'bold'
          }
        ],
        // 声光报警器
        audibleAlarm: [{
            title: '名称',
            charsetName: '声光报警器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
          {
            title: '声音',
            charsetName: '声音1',
            arrow: arrow,
            showSoundModal: true
          },
          {
            title: '音量',
            range: true,
            rangeValue: 0,
            min: 0,
            max: 100,
            step: 10
          }
        ],
        // 智能机械手
        smartRobot: [{
            title: '名称',
            charsetName: '智能机械手',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 风雨传感器
        weatherSensor: [{
            title: '名称',
            charsetName: '风雨传感器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 温湿度传感器
        tempAndHumiSensor: [{
            title: '名称',
            charsetName: '温湿度传感器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // PM2.5检测器
        pmDetector: [{
            title: '名称',
            charsetName: 'PM2.5检测器',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
        // 其他
        other: [{
            title: '名称',
            charsetName: '其他',
            arrow: arrow,
            icon: '',
            switch: false,
            isShowAlert: true
          },
          {
            title: '所属主机',
            charsetName: '主机1',
            arrow: '',
            icon: '',
            switch: false
          },
        ],
      },
      soundArr: [{
          title: '声音1',
          select: false
        },
        {
          title: '声音2',
          select: false
        },
        {
          title: '声音3',
          select: false
        },
        {
          title: '声音4',
          select: false
        },
        {
          title: '声音5',
          select: false
        },
        {
          title: '声音6',
          select: false
        }
      ],
      showNext: false,
      showArrowLeft: false,
      title: '编辑名称',
      isCharging: false,
      startY: 0,
      startX: 0,
      endY: 0,
      last_distance_Y: 0,
      last_distance_X: 0,
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {
    toPage(url) {
      this.$router.push({
        path: url
      })
    },
    showModal(index) {
      $.forbid();
      this.$dialog.confirm({
        title: this.title,
        confirmCallback: (inputMes) => {
          this.$dialog.hide()
          this.$set(this.charsetList.smartSocket[index], 'charsetName', inputMes);
        }
      })
    },
    changeElec(index) {
      this.isCharging = !this.isCharging;
    },
    selectSound(index) {
      this.$dialog.modal({
        title: '选择声音',
        soundArr: this.soundArr,
        soundCallback: (i) => {
          this.$dialog.hide();
          this.soundArr[i].select = true;
        }
      })
    },
    handleStart(e) {
      this.startY = e.changedTouches[0].pageY;
      this.startX = e.changedTouches[0].pageX;
    },
    handleMove(e) {
      const cur_moveY = e.changedTouches[0].pageY - this.startY;
      const cur_moveX = e.changedTouches[0].pageX - this.startX;
      const move_distanceY = this.last_distance_Y + cur_moveY;
      const move_distanceX = this.last_distance_X + cur_moveX;
      if (move_distanceX > 0) {
        this.$refs.control.style.transform = `translate(${move_distanceX}px, -50%)`;
        this.$refs.control.style.transition = 'all 0 ease';
      }
      if (move_distanceY > 0) {
        this.$refs.control.style.transform = `translate(-50%, ${move_distanceY}px)`;
        this.$refs.control.style.transition = 'all 0 ease';
      }
    },
    handleEnd(e) {
      const cur_move = e.changedTouches[0].pageY - this.startY;
      this.last_distance_Y += cur_move;

      if (this.last_distance_Y > 0) {
        this.$refs.control.style.transform = `translate(-50%, -50%)`;
        this.$refs.control.style.transition = 'all 400 ease';
        this.last_distance_Y = 0;
      }
      if (this.last_distance_X > 0) {
        this.$refs.control.style.transform = `translate(-50%, -50%)`;
        this.$refs.control.style.transition = 'all 400 ease';
        this.last_distance_X = 0;
      }
    },
    beforeMount() {

    },
    mounted() {
      if (!this.imgUrl[this.$route.query.type]) {
        this.imgUrl[this.$route.query.type] = this.imgUrl.smartSocket;
        // this.$set(this.imgUrl[this.$route.query.type], this.$route.query.type, this.imgUrl.smartSocket)
      }
    },
    destroyed() {}
  }
}