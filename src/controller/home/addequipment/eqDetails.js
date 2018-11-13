import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../../assets/images/home/yk-icon.png';
import icon2 from '../../../assets/images/home/open-icon.png';
import icon3 from '../../../assets/images/home/sp-icon.png';
import icon4 from '../../../assets/images/home/suo.png';
import icon5 from '../../../assets/images/home/chazuo.png';
import icon6 from '../../../assets/images/home/scene-btn.png';
import icon7 from '../../../assets/images/home/copy-icon.png';
import right from '../../../assets/images/home/arrow-right.png';

export default {
  name: 'AddEquipment',
  data() {
    return {
      listArr: {
        open: [{
          icon: icon2,
          title: '卧室窗户开关',
          arrow: right,
          query: 'open'
        }, {
          icon: icon2,
          title: '厨房窗户开关',
          arrow: right,
          query: 'open'
        }, {
          icon: icon2,
          title: '客厅窗户开关',
          arrow: right,
          query: 'open'
        }],
        radio: [{
          icon: icon3,
          title: '卧室红外/射频按键',
          arrow: right,
          query: 'radio'
        }, {
          icon: icon3,
          title: '厨房红外/射频按键',
          arrow: right,
          query: 'radio'
        }, {
          icon: icon3,
          title: '客厅红外/射频按键',
          arrow: right,
          query: 'radio'
        }],
        doorLock: [{
          icon: icon4,
          title: '卧室门锁',
          arrow: right,
          query: 'doorLock'
        }, {
          icon: icon4,
          title: '厨房门锁',
          arrow: right,
          query: 'doorLock'
        }, {
          icon: icon4,
          title: '客厅门锁',
          arrow: right,
          query: 'doorLock'
        }],
        socket: [{
          icon: icon5,
          title: '卧室插座',
          arrow: right,
          query: 'socket'
        }, {
          icon: icon5,
          title: '厨房插座',
          arrow: right,
          query: 'socket'
        }, {
          icon: icon5,
          title: '客厅插座',
          arrow: right,
          query: 'socket'
        }]
      },
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