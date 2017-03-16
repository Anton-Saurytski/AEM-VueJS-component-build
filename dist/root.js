var componentRoot = (function () {
'use strict';

var root = {
	render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"root"}},[_c('component-a',{attrs:{"node":_vm.componentA}}),_c('component-b',{attrs:{"node":_vm.componentB}})],1)},staticRenderFns: [],
  el: '#root',
  data: function data$1(){
    return data
  },
  components: {
    componentA: componentA,
    componentB: componentB
  }
};

return root;

}());
