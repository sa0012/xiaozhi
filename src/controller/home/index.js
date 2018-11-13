import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../assets/images/home/yaokongqi.png';
import icon2 from '../../assets/images/home/zhinengkaiguan.png';
import icon3 from '../../assets/images/home/hongwaianjian.png';
import icon4 from '../../assets/images/home/mensuo.png';
import icon5 from '../../assets/images/home/zhienngchazuo.png';
import icon6 from '../../assets/images/home/qingjinganniu.png';
import icon from '../../assets/images/home/icon-add.png';
import bg1 from '../../assets/images/home/home.png';
import bg2 from '../../assets/images/home/scc2.jpg';
import bg3 from '../../assets/images/home/scc3.jpg';
import bg4 from '../../assets/images/home/scc4.jpg';

export default {
  name: 'Home',
  data() {
    return {
      test: 'this is a home page',
      selected_detail: 0,
      roomArr: ['客厅', '厨房', '阳台', '主卧'],
      bgImgArr: [bg1, bg2, bg3, bg4],
      listIconArr: [
        [{
          icon: icon1,
          text: '电视遥控器1',
          showDel: false,
          isShake: false
        }, {
          icon: icon2,
          text: '智能开关2',
          showDel: false,
          isShake: false
        }, {
          icon: icon3,
          text: '红外/射频按键',
          showDel: false,
          isShake: false
        }, {
          icon: icon4,
          text: '门锁3',
          showDel: false,
          isShake: false
        }, {
          icon: icon5,
          text: '智能插座',
          showDel: false,
          isShake: false
        }, {
          icon: icon6,
          text: '情景按钮',
          showDel: false,
          isShake: false
        }, {
          icon: icon,
          text: '',
          showDel: false,
          isShake: false,
          isAdd: true
        }],
        [{
          icon: icon2,
          text: '智能开关2',
          showDel: false,
          isShake: false
        }, {
          icon: icon4,
          text: '门锁3',
          showDel: false,
          isShake: false
        }, {
          icon: icon5,
          text: '智能插座',
          showDel: false,
          isShake: false
        }, {
          icon: icon3,
          text: '红外/射频按键',
          showDel: false,
          isShake: false
        }, {
          icon: icon1,
          text: '电视遥控器1',
          showDel: false,
          isShake: false
        }, {
          icon: icon6,
          text: '情景按钮',
          showDel: false,
          isShake: false
        }, {
          icon: icon,
          text: '',
          showDel: false,
          isShake: false,
          isAdd: true
        }],
        [{
          icon: icon1,
          text: '电视遥控器1',
          showDel: false,
          isShake: false
        }, {
          icon: icon2,
          text: '智能开关2',
          showDel: false,
          isShake: false
        }, {
          icon: icon3,
          text: '红外/射频按键',
          showDel: false,
          isShake: false
        }, {
          icon: icon4,
          text: '门锁3',
          showDel: false,
          isShake: false
        }, {
          icon: icon5,
          text: '智能插座',
          showDel: false,
          isShake: false
        }, {
          icon: icon6,
          text: '情景按钮',
          showDel: false,
          isShake: false
        }, {
          icon: icon,
          text: '',
          showDel: false,
          isShake: false,
          isAdd: true
        }],
        [{
          icon: icon2,
          text: '智能开关2',
          showDel: false,
          isShake: false
        }, {
          icon: icon3,
          text: '红外/射频按键',
          showDel: false,
          isShake: false
        }, {
          icon: icon1,
          text: '电视遥控器1',
          showDel: false,
          isShake: false
        }, {
          icon: icon6,
          text: '情景按钮',
          showDel: false,
          isShake: false
        }, {
          icon: icon5,
          text: '智能插座',
          showDel: false,
          isShake: false
        }, {
          icon: icon4,
          text: '门锁3',
          showDel: false,
          isShake: false
        }, {
          icon: icon,
          text: '',
          showDel: false,
          isShake: false,
          isAdd: true
        }],
      ],
      Loop: null
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
    delListItem(selected_detail, index) {
      setTimeout(() => {
        this.listIconArr[selected_detail].splice(index, 1);
      }, 50)
    },
    showDeleteButton(selected_detail, index) {
      clearInterval(this.Loop);
      this.Loop = setTimeout(() => {
        if (index < (this.listIconArr[selected_detail].length - 1)) {
          this.listIconArr[selected_detail][index].showDel = true;
          this.listIconArr[selected_detail][index].isShake = true;
        }
      }, 1000);
    },
    closeBtn(selected_detail) {
      this.listIconArr[selected_detail].forEach((item, index) => {
        this.listIconArr[selected_detail][index].showDel = false;
        this.listIconArr[selected_detail][index].isShake = false;
      })
    },
    clearLoop() {
      clearInterval(this.Loop);
    },
  },
  beforeMount() {

  },
  mounted() {
    this.$store.dispatch('HOME_DATA', {
      msg: 'this is home store'
    })

  },
  destroyed() {}
}