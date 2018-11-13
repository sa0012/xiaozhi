import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'
import Filter from './filter'
import Directive from './directive'
import Components from './components'
import $ from '@/utils'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from '@/App'

import FastClick from 'fastclick'
import 'whatwg-fetch'

window.store = store
window.axios = axios


Vue.use(Mint)
window.Vue = Vue
window.router = router
window.Mint = Mint
Vue.config.productionTip = false
FastClick.attach(document.body)
Filter(Vue)
Directive(Vue)
Components(Vue)

// 部分安卓手机输入框遮挡问题
if (!$.isiPhone) {
  var clientHeight = document.body.clientHeight
  var _focusElem = null //输入框焦点
  //利用捕获事件监听输入框等focus动作
  document.body.addEventListener('focus', function (e) {
    _focusElem = e.target || e.srcElement
  }, true)
  //因为存在软键盘显示而屏幕大小还没被改变，所以以窗体（屏幕显示）大小改变为准
  window.addEventListener('resize', function () {
    if (_focusElem && document.body.clientHeight < clientHeight) {
      // 焦点元素滚动到可视范围的底部(false为底部)
      _focusElem.scrollIntoView(true)
    }
  })
}


router.afterEach(to => {
  document.title = to.meta.title
})

function localstorageTest() {
  var test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}


if (localstorageTest() === true) {

  new Vue({
    router,
    store,
    template: '<App/>',
    components: {
      App
    }
  }).$mount('#app')


} else {

}