import DialogComponent from './dialog.vue'

let instance = null

const dialogPlugin = {
  install (Vue, initOptions = {}) {
    const Dialog = Vue.extend(DialogComponent)
    if (!instance) {
      instance = new Dialog().$mount(document.createElement('div'))
      document.body.appendChild(instance.$el)
    }

    const defaults = {}
    for (let i in instance.$options.props) {
      if (i !== 'value') {
        defaults[i] = instance.$options.props[i].default
      }
    }

    const dialog = {
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
      alert(option) {
        this.show(Object.assign({}, option, { type: 'alert' }))
      },
      confirm (option) {
        this.show(Object.assign({}, option, { type: 'confirm' }))
      },
      modal(option) {
        this.show(Object.assign({}, option, { type: 'modal' }))
      }
    }

    Vue.mixin({
      created: function () {
        this.$dialog = dialog
      }
    })
  }
}

export default dialogPlugin
