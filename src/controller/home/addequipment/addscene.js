import $ from '@/utils';
import Mint from 'mint-ui';

import open1 from '../../../assets/images/home/open1-icon.png';
import open2 from '../../../assets/images/home/open2-icon.png';
import open3 from '../../../assets/images/home/open3-icon.png';
import open4 from '../../../assets/images/home/open4-icon.png';
import close1 from '../../../assets/images/home/close1-icon.png';
import close2 from '../../../assets/images/home/close2-icon.png';
import close3 from '../../../assets/images/home/close3-icon.png';
import close4 from '../../../assets/images/home/close4-icon.png';

export default {
  name: 'AddScene',
  data() {
    return {
      detailsArr: [
        {
          icon: open1,
          title: '打开卧室灯',
          color: '#6C7DE8'
        },
        {
          icon: close1,
          title: '关闭卧室灯',
          color: '#1AD0CD'
        },
        {
          icon: open2,
          title: '打开吊灯',
          color: '#3AC86C'
        },
        {
          icon: close2,
          title: '关闭吊灯',
          color: '#19B0FF'
        },
        {
          icon: open3,
          title: '打开简灯',
          color: '#FFA400'
        },
        {
          icon: close3,
          title: '关闭简灯',
          color: '#496179'
        },
        {
          icon: open4,
          title: '打开背景灯',
          color: '#5F76A9'
        },
        {
          icon: close4,
          title: '关闭背景灯',
          color: '#5F76A9'
        },
      ],
      showNext: false
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