import picker from './multiDatePicker.vue'
const multiDatePicker = {}
multiDatePicker.install = function (Vue, options) {
    Vue.component(picker.name, picker)
    if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(picker); }
}
export default multiDatePicker