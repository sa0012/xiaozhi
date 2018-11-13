import $ from '@/utils';
import Mint from 'mint-ui';
import AddIcon from '../../assets/images/scene/add.png';
import gloIcon from '../../assets/images/scene/globle.png';
import macIcon1 from '../../assets/images/scene/machine1.png';
import macIcon2 from '../../assets/images/scene/machine2.png';
import macIcon3 from '../../assets/images/scene/machine3.png';
import timing1 from '../../assets/images/scene/timing1.png';
import timing2 from '../../assets/images/scene/timing2.png';
import ldIcon1 from '../../assets/images/scene/liandong1.png';
import ldIcon2 from '../../assets/images/scene/liandong2.png';

import open1 from '../../assets/images/home/open1-icon.png';
import open2 from '../../assets/images/home/open2-icon.png';
import open3 from '../../assets/images/home/open3-icon.png';
import open4 from '../../assets/images/home/open4-icon.png';
import close1 from '../../assets/images/home/close1-icon.png';
import close2 from '../../assets/images/home/close2-icon.png';
import close3 from '../../assets/images/home/close3-icon.png';
import close4 from '../../assets/images/home/close4-icon.png';

export default {
  name: 'Scene',
  data() {
    return {
      detailsArr: [
        [{
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
        },
        {
          icon: open4,
          title: '打开背景灯',
          color: '#5F76A9',
          query: 'isOneKey'
        },
        {
          icon: close4,
          title: '关闭背景灯',
          color: '#5F76A9',
          query: 'isOneKey'
        },
        {
          icon: AddIcon,
          title: '',
          color: '#fff',
          query: 'isOneKey',
          isLast: true
        }
        ],
        [{
          icon: timing1,
          title: '定时场景0',
          color: '#6C7DE8',
          query: 'isTiming'
        },
        {
          icon: timing1,
          title: '定时场景1',
          color: '#6C7DE8',
          query: 'isTiming'
        },
        {
          icon: timing1,
          title: '定时场景2',
          color: '#6C7DE8',
          query: 'isTiming'
        },
        {
          icon: timing2,
          title: '定时场景3',
          color: '#F2F2F2',
          query: 'isTiming',
          sizeColor: '#999'
        },
        {
          icon: timing2,
          title: '定时场景4',
          color: '#F2F2F2',
          query: 'isTiming',
          sizeColor: '#999'
        },
        {
          icon: timing2,
          title: '定时场景5',
          color: '#F2F2F2',
          query: 'isTiming',
          sizeColor: '#999'
        },
        {
          icon: AddIcon,
          title: '',
          color: '#fff',
          query: 'isTiming',
          isLast: true
        }
        ],
        [{
          icon: ldIcon2,
          title: '联动模式0',
          color: '#FFA400',
          query: 'isLinkpage'
        },
        {
          icon: ldIcon2,
          title: '联动模式1',
          color: '#FFA400',
          query: 'isLinkpage'
        },
        {
          icon: ldIcon1,
          title: '联动模式2',
          color: '#F2F2F2',
          query: 'isLinkpage',
          sizeColor: '#999'
        },
        {
          icon: ldIcon1,
          title: '联动模式3',
          color: '#F2F2F2',
          query: 'isLinkpage',
          sizeColor: '#999'
        },
        {
          icon: AddIcon,
          title: '',
          color: '#fff',
          query: 'isLinkpage',
          isLast: true
        }
        ]
      ],
      sceneList: [
        '一键场景',
        '定时场景',
        '联动场景'
      ],
      navbar: [{
        title: '全局场景',
        icon: gloIcon,
        url: '/scene/global'
      },
      {
        title: '小智主机1',
        icon: macIcon1,
        url: '/scene/global'
      },
      {
        title: '小智主机2',
        icon: macIcon2,
        url: '/scene/global'
      },
      {
        title: '小智主机3',
        icon: macIcon3,
        url: '/scene/global'
      }
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
