import $ from '@/utils'
import icon1 from '@/assets/images/equipment/addEquipment/tp.png'

export default {
  name: 'repeaterSecond',
  data() {
    return {
        img: icon1,
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
