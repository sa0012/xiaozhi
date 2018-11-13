import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../../assets/images/scene/set.png';
import icon3 from '../../../assets/images/scene/yc.png';
import del from '../../../assets/images/scene/del.png';

export default {
    name: 'Scene',
    data() {
        return {
            sceneList: [
                '执行设备',
                '执行动作',
                '延时'
            ],
            editArr: [[{
                    iconUrl: icon1,
                    title: '红外控制器1',
                    delUrl: del,
                    time: '100',
                    openStatus: false
                },
                {
                    iconUrl: icon1,
                    title: '智能开关1',
                    delUrl: del,
                    time: '100',
                    openStatus: false
                },
                {
                    iconUrl: icon3,
                    title: '智能插座1',
                    delUrl: del,
                    time: '100',
                    openStatus: true
                },
            ], [{
                    iconUrl: icon1,
                    title: '红外控制器2',
                    delUrl: del,
                    time: '100',
                    openStatus: false
                },
                {
                    iconUrl: icon1,
                    title: '智能开关2',
                    delUrl: del,
                    time: '100',
                    openStatus: false
                },
                {
                    iconUrl: icon3,
                    title: '智能插座2',
                    delUrl: del,
                    time: '100',
                    openStatus: true
                },
            ], [{
                    iconUrl: icon1,
                    title: '红外控制器3',
                    delUrl: del,
                    time: '100',
                    openStatus: false
                },
                {
                    iconUrl: icon1,
                    title: '智能开关3',
                    delUrl: del,
                    time: '100',
                    openStatus: false
                },
                {
                    iconUrl: icon3,
                    title: '智能插座3',
                    delUrl: del,
                    time: '100',
                    openStatus: true
                },
            ]],
            selected_detail: 0,
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