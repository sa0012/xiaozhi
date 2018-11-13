import $ from '@/utils'

export default {
  name: 'databackup',
  data() {
    return {
      showNext: false,
      items: [
        {
          title: 'A用户的小智机器人数据',
          datatime: '2017年12月1日 18:00'
        }, {
          title: 'B用户的小智机器人数据',
          datatime: '2017年12月1日 18:00'
        }, {
          title: 'C用户的小智机器人数据',
          datatime: '2017年12月1日 18:00'
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
