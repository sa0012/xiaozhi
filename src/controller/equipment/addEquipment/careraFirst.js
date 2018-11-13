import $ from '@/utils'
import icon1 from '@/assets/images/equipment/addEquipment/icon1.png'

export default {
  name: 'cameraFirst',
  data() {
    return {
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
    backPage() {
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
