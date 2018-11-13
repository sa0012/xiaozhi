import $ from '@/utils'
import Mint from 'mint-ui'

export default {
    name: 'StatusSet',
    data() {
        return {
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