import config from '@/config'
import utils from '@/utils'

let fullTwo = num => num > 9 ? num : '0' + num

export default (Vue) => {
  Vue.filter('config', (key, val) => key ? config[val][key] : '')
  Vue.filter('numberToChinese', number => number / 10000 >= 1 ? (number / 10000).toFixed(2) + '万' : number)
  Vue.filter('doubleNumber', number => typeof number === 'string' ? (+number).toFixed(2) : number)
  Vue.filter('replaceCode', content => content ? content.replace(/-/g, '.') : '0')
  Vue.filter('formatMinute', minute => minute < 60 ? minute + '分钟' : Math.floor(minute / 60) + '小时' + minute % 60 + '分钟')
  Vue.filter('lineStatus', status => {
    return config.lineStatus[status];
  })
  Vue.filter('selectmac', id => {
    return config.selectmac[id]
  })
  Vue.filter('openStatus', id => config.openStatus[id])
}
