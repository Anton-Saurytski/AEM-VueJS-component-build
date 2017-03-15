const rollup = require( 'rollup' );
const fs     = require('fs');
const vue    = require('rollup-plugin-vue');
const buble  = require('rollup-plugin-buble');


rollup.rollup({
  entry: 'src/a/component.vue',
  dest: 'dist/a.js',
  plugins: [ 
  	vue({compileTemplate: true}), buble() 
  ]
}).then( function(bundle) {
  var result = bundle.generate({
    // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
    format: 'iife',
    moduleName: 'componentA',
    dest: './dist/'
  });

  fs.writeFileSync( 'dist/a.js', result.code );
});
