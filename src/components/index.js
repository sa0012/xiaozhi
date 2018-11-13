import Header from './Header.vue'
import Navbars from './Nav.vue'
import Sheet from './sheet/sheet.js'
import Dialog from './dialog/dialog.js'

export default(Vue) => {
  Vue.component('navbar', Header);
  Vue.use(Sheet);
  Vue.use(Dialog);
}
