import $ from '@/utils';
import Mint from 'mint-ui';

import airIcon from '../../../assets/images/home/air-icon.png';
import tvIcon from '../../../assets/images/home/tv-icon.png';
import customizeIcon from '../../../assets/images/home/customize-icon.png';

export default {
  name: 'AddEquipment',
  data() {
    return {
      detailsArr: [
        {
          icon: airIcon,
          title: '空调',
        },
        {
          icon: tvIcon,
          title: '电视',
        },
        {
          icon: airIcon,
          title: '机顶盒',
        },
        {
          icon: airIcon,
          title: '窗帘',
        },
        {
          icon: airIcon,
          title: '风扇',
        },
        {
          icon: airIcon,
          title: '音响',
        },
        {
          icon: customizeIcon,
          title: '自定义',
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