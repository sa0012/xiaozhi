import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../../assets/images/scene/wd_icon.png';
import icon2 from '../../../assets/images/scene/hw_icon.png';
import icon3 from '../../../assets/images/scene/sd_icon.png';
import icon4 from '../../../assets/images/scene/zn_icon.png';
import icon5 from '../../../assets/images/scene/jxs_icon.png';
import icon6 from '../../../assets/images/scene/light_warn.png';

export default {
    name: 'Trigger',
    data() {
        return {
            detailsArr: [{
                    iconUrl: icon1,
                    title: '温度',
                    url: '/scene/setting',
                    color: '#19B0FF'
                },
                {
                    iconUrl: icon2,
                    title: '红外控制器',
                    url: '/scene/setting',
                    color: '#FFA400'
                },
                {
                    iconUrl: icon3,
                    title: '温湿度传感器',
                    url: '/scene/setting',
                    color: '#31CC68'
                },
                {
                    iconUrl: icon4,
                    title: '智能窗帘',
                    url: '/scene/setting',
                    color: '#4A6178'
                },
                {
                    iconUrl: icon5,
                    title: '智能机械手',
                    url: '/scene/setting',
                    color: '#6B7AEB'
                },
                {
                    iconUrl: icon6,
                    title: '声光报警器',
                    url: '/scene/setting',
                    color: '#19B0FF'
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