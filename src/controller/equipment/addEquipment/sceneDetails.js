import $ from '@/utils';
import Mint from 'mint-ui';
import AddIcon from '../../../assets/images/scene/add.png';
import gloIcon from '../../../assets/images/scene/globle.png';
import macIcon1 from '../../../assets/images/scene/machine1.png';
import macIcon2 from '../../../assets/images/scene/machine2.png';
import macIcon3 from '../../../assets/images/scene/machine3.png';
import timing1 from '../../../assets/images/scene/timing1.png';
import timing2 from '../../../assets/images/scene/timing2.png';
import ldIcon1 from '../../../assets/images/scene/liandong1.png';
import ldIcon2 from '../../../assets/images/scene/liandong2.png';
import open1 from '../../../assets/images/home/open1-icon.png';
import open2 from '../../../assets/images/home/open2-icon.png';
import open3 from '../../../assets/images/home/open3-icon.png';
import close1 from '../../../assets/images/home/close1-icon.png';
import close2 from '../../../assets/images/home/close2-icon.png';
import close3 from '../../../assets/images/home/close3-icon.png';

export default {
  name: 'Scene',
  data() {
    return {
      detailsArr: [
        {
          icon: open1,
          title: '打开卧室灯',
          color: '#6C7DE8',
          query: 'isOneKey'
        },
        {
          icon: close1,
          title: '关闭卧室灯',
          color: '#1AD0CD',
          query: 'isOneKey'
        },
        {
          icon: open2,
          title: '打开吊灯',
          color: '#3AC86C',
          query: 'isOneKey'
        },
        {
          icon: close2,
          title: '关闭吊灯',
          color: '#19B0FF',
          query: 'isOneKey'
        },
        {
          icon: open3,
          title: '打开简灯',
          color: '#FFA400',
          query: 'isOneKey'
        },
        {
          icon: close3,
          title: '关闭简灯',
          color: '#496179',
          query: 'isOneKey'
        }
      ],
      sceneList: [
        'A',
        'B',
        'C',
        'D'
      ],
      selected_detail: 0,
      showNext: false,
      showArrowLeft: false,
      showBetter: false
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
    changeBetter() {
      this.showBetter = !this.showBetter
    }
  },
  beforeMount() {

  },
  mounted() {
    this.$store.dispatch('HOME_DATA', {
      msg: 'this is home store'
    })

    document.body.addEventListener('click', () => {
    })
  },
  destroyed() {}
}
