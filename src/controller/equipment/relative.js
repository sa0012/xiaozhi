import $ from '@/utils'

export default {
  name: 'equipmentRelative',
  data() {
    return {
        lists: [{
            name: '管理员',
            telphone: 1521648465
        }, {
            name: '普通用户',
            telphone: 1521648465
        }, {
            name: '普通用户',
            telphone: 1521648465
        }],
        showArrowLeft: true,
        showNext: false,
        showTitle: true
    }
  },
  computed: {
    data() {
    }
  },
  methods: {
    toPage(url) {
    },
    backPage() {
      window.history.back()
    }
  },
  beforeMount() {
    
  },
  mounted() {
  },
  destroyed() {
  }
}
