import SheetComponent from './sheet.vue'

let instance = null

const sheetPlugin = {
  install (Vue, initOptions = {}) {
    const Sheet = Vue.extend(SheetComponent)
    if (!instance) {
      instance = new Sheet().$mount(document.createElement('div'))
      document.body.appendChild(instance.$el)
    }

    const defaults = {}
    for (let i in instance.$options.props) {
      if (i !== 'value') {
        defaults[i] = instance.$options.props[i].default
      }
    }

    const sheet = {
      show (options = {}) {
        const opt = Object.assign({}, defaults, options)
        for (let key in opt) {
          instance[key] = opt[key]
        }
        instance.visible = true
      },
      hide (callback) {
        instance.visible = false
        callback && callback()
      },
      confirm (option) {
        this.show(Object.assign({}, option))
      }
    }

    Vue.mixin({
      created: function () {
        this.$sheet = sheet
      }
    })
  }
}

export default sheetPlugin
