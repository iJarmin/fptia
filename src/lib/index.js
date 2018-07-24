import fptiaVue from './fptia'

const fptia = {
  install(Vue, options){
    Vue.component(fptiaVue.name,fptiaVue)
    Vue.prototype.$log=fptiaVue.methods.log
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(fptia);
}
export default fptia
