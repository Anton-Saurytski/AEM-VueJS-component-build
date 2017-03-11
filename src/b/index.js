import Vue from 'vue'
import component from './component.vue'

new Vue({
  el: '#componentB',
  render: h => h(component)
})
