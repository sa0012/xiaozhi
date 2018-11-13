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
                    title: '关联布撤防',
                    select: true
                },
                {
                    title: '不关联',
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
            editArr: [{
                    iconUrl: icon1,
                    title: '红外控制器',
                    openStatus: 0
                },
                {
                    iconUrl: icon2,
                    title: '智能开关',
                    openStatus: 1
                },
                {
                    iconUrl: icon3,
                    title: '智能插座',
                    openStatus: 1
                },
            ],
            selected_detail: 0,
            switchDay: false,
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
        showSheet() {
            this.$sheet.confirm({
                sheetList: [{
                        title: '修改属性',
                        callback: null
                    },
                    {
                        title: '编辑属性',
                        callback: null
                    },
                    {
                        title: '删除情景',
                        callback: null
                    },
                    {
                        title: '取消',
                        callback: () => {
                            this.$sheet.hide()
                        }
                    },
                ],
            })
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