import Vue from 'vue'
import component from './component.vue'

new Vue({
  el: '#componentA',
  render: h => h(component)
})
