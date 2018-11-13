import $ from '@/utils'
// import add from '@/assets/images/further/add.png'
import livingroom from '@/assets/images/further/room/livingroom-icon.png'
import kitchen from '@/assets/images/further/room/kitchen-icon.png'
import bedroom from '@/assets/images/further/room/bedroom-icon.png'
import restroom from '@/assets/images/further/room/restroom-icon.png'

export default {
  name: 'roomlist',
  data() {
    return {
      showNext: false,
      showArrowLeft: true,
      images: {
        // add: add
      },
      items: [
        {
          listImg: livingroom,
          title: '客厅'
        },
        {
          listImg: kitchen,
          title: '房间'
        },
        {
          listImg: bedroom,
          title: '卧室'
        },
        {
          listImg: restroom,
          title: '洗手间'
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
    toPage(url) {
      this.$router.push({path: url})
    }
  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
