import $ from '@/utils'
import addromefile from '@/assets/images/further/room/addromefile-icon.png'

export default {
  name: 'management',
  data() {
    return {
      showNext: false,
      roomname: '',
      userImg: addromefile,
      value: '',
      items: [
        {
          title: '分机设备1'
        }, {
          title: '分机设备2'
        }, {
          title: '分机设备3'
        }, {
          title: '温湿度传感器'
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

  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
