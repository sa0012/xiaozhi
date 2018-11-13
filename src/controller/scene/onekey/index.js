import $ from '@/utils'
import Mint from 'mint-ui'
import icon1 from '../../../assets/images/scene/icon1.png';
import icon2 from '../../../assets/images/scene/icon2.png';
import icon3 from '../../../assets/images/scene/icon3.png';
import del from '../../../assets/images/scene/del.png';
import switch1 from '../../../assets/images/scene/switch1.png';
import switch2 from '../../../assets/images/scene/switch2.png';

export default {
    data() {
        return {
            name: 'OneKey',
            relatedList: [{
                    title: '不关联',
                    select: true
                },
                {
                    title: '撤防',
                    select: false
                },
                {
                    title: '布防',
                    select: false
                }
            ],
            dayArr: [{
                    title: '日',
                    select: true
                },
                {
                    title: '一',
                    select: false
                },
                {
                    title: '二',
                    select: false
                },
                {
                    title: '三',
                    select: true
                },
                {
                    title: '四',
                    select: false
                },
                {
                    title: '五',
                    select: true
                },
                {
                    title: '六',
                    select: false
                },
            ],
            selectArr: [{
                    title: '小智主机1',
                    id: 1
                },
                {
                    title: '小智主机2',
                    id: 2
                },
                {
                    title: '小智主机3',
                    id: 3
                }
            ],
            editArr: [{
                    iconUrl: icon1,
                    title: '红外控制器',
                    delUrl: del,
                    switchUrl1: switch1,
                    switchUrl2: switch2,
                    switchDay: false
                },
                {
                    iconUrl: icon2,
                    title: '智能开关',
                    delUrl: del,
                    switchUrl1: switch1,
                    switchUrl2: switch2,
                    switchDay: false
                },
                {
                    iconUrl: icon3,
                    title: '智能插座',
                    delUrl: del,
                    switchUrl1: switch1,
                    switchUrl2: switch2,
                    switchDay: false
                },
            ],
            modelSelect: 1,
            switchDay: false,
            switchDay1: false,
            selected_detail: 0,
            showNext: false
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
        changeTab(index) {
            this.relatedList.forEach((item, i) => {
                if (i === index) {
                    this.relatedList[index].select = true;
                } else {
                    this.relatedList[i].select = false;
                }
            })
        },
        selectDay(index) {
            this.dayArr[index].select = !this.dayArr[index].select;
        },
        delItem(index) {
            this.editArr.splice(index, 1);
        }
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