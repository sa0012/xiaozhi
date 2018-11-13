import $ from '@/utils'

export default {
  name: 'messageRecord',
  data() {
    return {
      showNext: false,
      item: {},
      title: `设备停止服务通知`,
      datatxt: `亲爱的用户您的设备服务时间即将到期，请您尽快完成续费，以保设备的正常工作.
      亲爱的用户您的设备服务时间即将到期，请您尽快完成续费，以保设备的正常工作`
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {
    getrouterdata () {
      this.item = this.$route.query.titleid
      console.log(this.$route.query.titleid)
    }
  },
  beforeMount() {

  },
  mounted() {
    this.getrouterdata()
  },
  destroyed() {
  }
}
