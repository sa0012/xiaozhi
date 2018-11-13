import $ from '@/utils'

export default {
  name: 'messageRecord',
  data() {
    return {
      showNext: false,
      items: [
        {
          id: 1,
          title: 'A用户的小智机器人数据',
          datatxt: '亲爱的用户您的设备服务时间即将到期，请您尽快完成续费，以保设备的正常工作',
          datatime: '2017年12月1日 18:00',
        }, {
          id: 2,
          title: 'B用户的小智机器人数据',
          datatxt: '亲爱的用户您的设备服务时间即将到期，请您尽快完成续费，以保设备的正常工作',
          datatime: '2018年12月1日 18:00'
        }, {
          id: 3,
          title: 'C用户的小智机器人数据',
          datatxt: '亲爱的用户您的设备服务时间即将到期，请您尽快完成续费，以保设备的正常工作',
          datatime: '2016年12月1日 18:00'
        }
      ]
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {

  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
