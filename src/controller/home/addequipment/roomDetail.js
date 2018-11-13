import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'RoomDetail',
  data() {
    return {
      machineList: [
          {
              title: '小智主机1',
              status: 'online',
              selectStatus: false
          },
          {
              title: '小智主机2',
              status: 'offline',
              selectStatus: false
          },
          {
              title: '小智主机3',
              status: 'online',
              selectStatus: false
          }
      ],
      controlList: [
          {
              title: '分机设备1'
          },
          {
              title: '分机设备2'
          },
          {
              title: '分机设备3'
          },
          {
              title: '温湿度传感器'
          }
      ],
      selectStatus: false
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