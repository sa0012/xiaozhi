import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../../assets/images/home/yk-icon.png';
import icon2 from '../../../assets/images/home/open-icon.png';
import icon3 from '../../../assets/images/home/sp-icon.png';
import icon4 from '../../../assets/images/home/suo.png';
import icon5 from '../../../assets/images/home/chazuo.png';
import icon6 from '../../../assets/images/home/copy-icon.png';
import icon7 from '../../../assets/images/home/scene-btn.png';
import right from '../../../assets/images/home/arrow-right.png';

export default {
  name: 'AddEquipment',
  data() {
    return {
      listArr: [{
          icon: icon1,
          title: '遥控',
          arrow: right,
          query: 'remote'
        },
        {
          icon: icon2,
          title: '智能开关',
          arrow: right,
          query: 'open'
        },
        {
          icon: icon3,
          title: '红外/射频按键',
          arrow: right,
          query: 'radio'
        },
        {
          icon: icon4,
          title: '门锁',
          arrow: right,
          query: 'doorLock'
        },
        {
          icon: icon5,
          title: '智能插座',
          arrow: right,
          query: 'socket'
        },
        {
          icon: icon6,
          title: '从其他房间复制',
          arrow: right,
          query: 'copyRm'
        },
        {
          icon: icon7,
          title: '情景按钮',
          arrow: right,
          query: 'scene'
        },
      ],
      showNext: false,
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
    }
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