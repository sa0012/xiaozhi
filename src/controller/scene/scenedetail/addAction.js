import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../../assets/images/scene/zidingyi.png';
import icon2 from '../../../assets/images/scene/key.png';
import icon3 from '../../../assets/images/scene/open_light.png';
import icon4 from '../../../assets/images/scene/curtain.png';
import icon5 from '../../../assets/images/scene/spot_light.png';

export default {
    name: 'Scene',
    data() {
        return {
            actionList: [
                {
                    iconUrl: icon1,
                    title: '自定义',
                    url: '/scene/statusSet'
                },
                {
                    iconUrl: icon2,
                    title: '按键',
                    url: '/scene/statusSet'
                },
                {
                    iconUrl: icon3,
                    title: '开灯',
                    url: '/scene/statusSet'
                },
                {
                    iconUrl: icon4,
                    title: '窗帘',
                    url: '/scene/statusSet'
                },
                {
                    iconUrl: icon5,
                    title: '前台射灯',
                    url: '/scene/statusSet'
                }
            ],
            showNext: false,
            showArrowLeft: false,
            showBetter: false
        }
    },
    computed: {
        data() {
            return this.$store.state.Home
        }
    },
    methods: {
        toPage(url) {
            this.$router.push({
                path: url
            })
        },
    },
    beforeMount() {

    },
    mounted() {
        this.$store.dispatch('HOME_DATA', {
            msg: 'this is home store'
        })

    },

    destroyed() {}
}