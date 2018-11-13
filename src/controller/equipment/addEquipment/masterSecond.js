import $ from '@/utils'
import fibre from '@/assets/images/equipment/addEquipment/fibre.gif'
import wifi from '@/assets/images/equipment/addEquipment/wifi.gif'

export default {
  name: 'masterSecond',
  data() {
    return {
      images: {
        fibre: fibre,
        wifi: wifi
      },
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
