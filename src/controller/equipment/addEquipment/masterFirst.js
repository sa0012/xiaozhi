import $ from '@/utils'
import plane from '@/assets/images/equipment/addEquipment/plane.gif'
import adapter from '@/assets/images/equipment/addEquipment/adapter.gif'

export default {
  name: 'masterFirst',
  data() {
    return {
      images: { 
        plane: plane,
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
