import $ from '@/utils'
import iconwifi from '@/assets/images/equipment/addEquipment/iconwifi.gif'
import adapter from '@/assets/images/equipment/addEquipment/adapter.gif'

export default {
  name: 'masterThird',
  data() {
    return {
        images: {
          iconwifi: iconwifi,
          adapter: adapter
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
