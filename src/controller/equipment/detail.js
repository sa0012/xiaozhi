import $ from '@/utils'
import property from '@/assets/images/equipment/property.gif'
import add from '@/assets/images/equipment/add.png'

export default {
  name: 'equipmentDetail',
  data() {
    return {
        images: {
            add: add
        },
        lists: [{
            name: '小智机器人1',
            images: property,
            status: false
        }, {
            name: '小智机器人2',
            images: property,
            status: false
        }, {
            name: '小智机器人3',
            images: property,
            status: true
        }, {
            name: '小智机器人4',
            images: property,
            status: true
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
        this.$router.push(url)
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
