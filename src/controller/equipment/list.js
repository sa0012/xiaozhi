import $ from '@/utils'
import oneline from '@/assets/images/equipment/oneline.png'
import outline from '@/assets/images/equipment/outline.png'

export default {
  name: 'equipmentList',
  data() {
    return {
      lists: [{
        name: '设备1',
        images: oneline
      }, {
        name: '设备2',
        images: outline
      }, {
        name: '设备3',
        images: outline
      }, {
        name: '设备4',
        images: oneline
      }],
      showArrowLeft: true,
      showNext: false,
      showTitle: true
    }
  },
  computed: {
    data() {}
  },
  methods: {
    toPage(url) {
      this.$router.push({
        path: url
      })
    },
    backPage() {
      window.history.back()
    }
  },
  beforeMount() {

  },
  mounted() {},
  destroyed() {}
}