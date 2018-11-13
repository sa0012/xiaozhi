import $ from '@/utils'
import repeatOff from '@/assets/images/equipment/addEquipment/repeatOff.png'
import repeatOn from '@/assets/images/equipment/addEquipment/repeatOn.png'

export default {
  name: 'repeaterFirst',
  data() {
    return {
      showArrowLeft: true,
      showNext: false,
      showTitle: true,
      lists: [{
        selected: false,
        img: repeatOff,
        name: '主机1'
      }, {
        selected: true,
        img: repeatOn,
        name: '主机2'
      }, {
        selected: false,
        img: repeatOff,
        name: '主机3'
      }]
    }
  },
  computed: {
    data() {
    }
  },
  methods: {
    backPage () {
      window.history.back()
    },
    goPage (url) {
     this.$router.push(url)
    }
  },
  beforeMount() {
    
  },
  mounted() {
  },
  destroyed() {
  }
}
